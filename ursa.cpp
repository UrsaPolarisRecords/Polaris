#include <eosio/eosio.hpp>
#include <stdio.h>
#include <math.h>
using namespace std;
using namespace eosio;

CONTRACT ursa : public contract {
  public:
    using contract::contract;

    TABLE project {
        uint64_t id = 0;
        string sourceLink;
        string dbMessage;
        name curator;

        auto primary_key() const { return id;}
    };

    typedef multi_index <name( "projects" ), project> projects_table;

    uint64_t txCounter = 0;
    float txMultiplier (uint64_t txCounter){
      float logtxc;
      float ftxc;
      logtxc = log(txCounter);
      ftxc = logtxc/txCounter;
      return ftxc;
    } ;
    ACTION addProject(name curator, uint64_t id, string sourceLink, string dbMessage);
    ACTION addData (name curator, uint64_t id, string sourceLink, string dbMessage);
    ACTION edit(name curator, uint64_t id, uint64_t txReference, string dbMessage);
    ACTION verify(name curator, uint64_t txReference, bool upDn);
    ACTION comment(name curator, uint64_t txReference, string dbMessage);
    ACTION thumbsUp(name curator, uint64_t txReference, bool upDn);
    ACTION endorse(name curator, uint64_t id, float stake, string message);

  private:
};


ACTION addProject(name curator, string sourceLink, string dbMessage) {
  
  //require authorization of curator
  require_auth( curator );
  //require staking of tokens based on # of recent transactions
  //publish curator, sourcelink, and message
  //mint tokens (ftxc*1000)
  //increment the transaction counter plus 1

}

ACTION addData(name curator, uint64_t id, string sourceLink, string dbMessage){
  //require authorization of the curator
  //fetch ID of the entity to which data will be added
  //verify that the entity exists
  //require the staking of tokens based on # of recent transactions
  //publish curator, sourcelink, and db message
  //mint tokens (ftxc*50)
  //increment the transaction counter plus 1
}


ACTION edit(name curator, uint64_t id, uint64_t txReference, string dbMessage) {
  //require authorization of curator
  require_auth( curator );
  //require staking of tokens based on # of recent transactions
  //publish curator, sourcelink, and message
  //mint tokens (ftxc*3)
  //increment the transaction counter plus 1

}

ACTION verify(name curator, uint64_t txReference, bool upDn);
  //require authorization of the curator
  //check that the referenced transaction exists
  //require staking of tokens based on # of recent transactions
  //if upDn is true (upvote), then add to txReference's up votes
  //if upDn is false(downvote), then add to txReference's down votes
  //mint tokens (ftxc*1)

ACTION comment(name curator, uint64_t txReference, string dbMessage);
  //require authorization of the curator
  //check that the referenced transaction exists
  //publish curator, txReference, and dbMessage

ACTION thumbsUpDn(name curator, uint64_t txReference, bool upDn);
  //require authorization of the curator
  //check that the referenced transaction exists
  //publish curator, txReference, and up/down boolean

/*
ACTION ursa::hi(name from, string message) {
  require_auth(from);
  // Init the _message table
  messages_table _messages(get_self(), get_self().value);
  // Find the record from _messages table
  auto msg_itr = _messages.find(from.value);
  if (msg_itr == _messages.end()) {
    // Create a message record if it does not exist
    _messages.emplace(from, [&](auto& msg) {
      msg.user = from;
      msg.text = message;
    });
  } else {
    // Modify a message record if it exists
    _messages.modify(msg_itr, from, [&](auto& msg) {
      msg.text = message;
    });
  }
}
ACTION ursa::clear() {
  require_auth(get_self());
  messages_table _messages(get_self(), get_self().value);
  // Delete all records in _messages table
  auto msg_itr = _messages.begin();
  while (msg_itr != _messages.end()) {
    msg_itr = _messages.erase(msg_itr);
  }
}
EOSIO_DISPATCH(ursa, (hi)(clear))*/

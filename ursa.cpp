#include <eosio/eosio.hpp>
#include <stdio.h>
#include <math.h>
using namespace std;
using namespace eosio;

CONTRACT ursa : public contract {
  public:
    using contract::contract;
    uint64_t txcounter = 0;
    float txmultiplier (uint64_t txcounter){
      float logtxc;
      float ftxc;
      logtxc = log(txcounter);
      ftxc = logtxc/txcounter;
      return ftxc;
    } ;
    ACTION addproject(name curator, uint64_t id, string sourcelink, string message, const int multiplier);
    ACTION edit(name curator, uint64_t id, );

  private:
};


ACTION addproject(name curator, string sourcelink, string message) {
  //require authorization of curator
  require_auth( curator );
  //publish curator, sourcelink, and message
  //mint tokens (ftxc*1000)

}
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

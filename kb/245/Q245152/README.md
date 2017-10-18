---
layout: page
title: "Q245152: XADM: How Secure Sockets Layer Works"
permalink: kb/245/Q245152/
---

## Q245152: XADM: How Secure Sockets Layer Works

	Article: Q245152
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides an overview of how Secure Sockets Layer (SSL) works.
	
	MORE INFORMATION
	================
	
	An Introduction to Key Cryptography
	-----------------------------------
	
	Rivest-Shamir-Adleman (RSA) public key cryptography is widely used for
	authentication and encryption in the computer industry. Netscape has licensed
	RSA public key cryptography from RSA Data Security Inc. for use in its products,
	specifically for authentication.
	
	Public key encryption is a technique that uses a pair of asymmetric keys for
	encryption and decryption. Each pair of keys consists of a public key and a
	private key. The public key is made public when it is distributed it widely. The
	private key is never distributed; it is always kept secret.
	
	Data that is encrypted with the public key can only be decrypted with the private
	key. Conversely, data that is encrypted with the private key can be decrypted
	only with the public key. This asymmetry is the property that makes public key
	cryptography so useful.
	
	Using Public Key Cryptography for Authentication
	------------------------------------------------
	
	Authentication is the process of verifying identity so that one entity can be
	sure of the identity of another entity. In the following examples, User A and
	User B use public key cryptography to verify User B's identity. The following
	notation indicates that an item has been encrypted or decrypted using key
	cryptography
	
	  {<something>}<key>
	
	where <something> is a description of the item that has been encrypted or
	decrypted, and <key> is the key that is used to encrypt or decrypt that
	item.
	
	In the following example, User A wants to authenticate User B. User B has a pair
	of keys, one public and one private. User B discloses the public key to User A
	(this is discussed in the "Handing Out Public Keys" section of this article).
	User A generates a random message and sends it to User B as follows:
	
	  A->B <random_message>
	
	User B uses the private key to encrypt the random message and returns the
	encrypted version to User A:
	
	  B->A {<random_message>}<User_B's_private_key>
	
	User A receives this message and decrypts it by using the public key that User B
	previously published. User A compares the decrypted message with the message
	that User A originally sent to User B; if the messages match, User A knows that
	the later message came from User B, because an imposter presumably would not
	know User B's private key and so would be unable to properly encrypt the random
	message to send to User A.
	
	Additional Considerations
	-------------------------
	
	Unless you know exactly what you are encrypting, it is never a good idea to
	encrypt something with your private key and then send it to someone else. This
	is because you can be held responsible for the encrypted value (remember, only
	you can perform the encryption because only you have the private key).
	
	Because of this, in this example, instead of encrypting the original message that
	User A sent, User B constructs a message digest and encrypts that message
	digest. A message digest is derived from the original random message and has the
	following useful properties:
	
	- The digest is difficult to reverse. Someone who is trying to impersonate User
	  B cannot determine the original message from the digest.
	
	- An impersonator has difficulty finding a different message that computes to
	  the same digest value.
	
	User B is protected by using a digest. User B computes the digest of the random
	message that User A sent, and then encrypts the result. User B sends the
	encrypted digest back to User A. User A can compute the same digest and
	authenticate User B by decrypting User B's message and comparing the values.
	
	Originating Data for Authentication
	-----------------------------------
	
	The technique described in the "Additional Considerations" section of this
	article is known as a digital signature. This technique requires that User B
	sign a message that User A generated; this is almost as dangerous for User B as
	encrypting a random value that originated with User A. Consequently, this
	example authentication protocol needs one more step to be secure; User B needs
	to originate some (or all) of the data as follows:
	
	  A->B B->A hello, are you User B? User A, This Is User B {
	  <digest>[User A, This Is User B] } <User_B's_private_key>
	
	When User B uses this protocol, User B knows what message is being sent to User
	A, and so User B can safely sign the message. User B sends the unencrypted
	version of the message first, "User A, This Is User B," and then User B sends
	the digested-encrypted version. User A can easily verify that User B is User B,
	and User B does not need to sign anything that did not originate with User B.
	
	Handing Out Public Keys
	-----------------------
	
	How can a user hand out a public key in a secure manner? The following is an
	example authentication protocol for User B:
	
	  A->B B->A A->B B->A
	  hello Hi, I'm User B, <User_B's_public_key> prove it User A, This Is
	  User B { <digest>[User A, This Is User B] } <User_B's_private_key>
	
	If this protocol is used, anyone can impersonate User B. All an imposter needs is
	a public and private key. An imposter can lie to User A and impersonate User B
	by providing the imposter's own public key instead of User B's public key. Then
	the imposter "proves" that the imposter is User B by encrypting something by
	using the imposter's private key, and User A cannot tell that the imposter is
	not User B.
	
	To solve this problem, the standards community has invented an object called a
	certificate. A certificate contains the following information:
	
	- The name of the certificate issuer.
	
	- The entity for whom the certificate is being issued (also known as the
	  subject).
	
	- The public key of the subject.
	
	- Some time stamps.
	
	The certificate is signed by using the private key of the certificate issuer.
	Everyone knows the public key of the certificate issuer (that is, the
	certificate issuer also has a certificate). Certificates are a standard method
	to bind a public key to a name.
	
	If certificate technology is used, everyone can examine User B's certificate to
	see if the certificate has been forged. If User B keeps tight control of the
	private key, and User B actually obtains the certificate, then the certificate
	technology is secure. The following is the amended protocol using this
	technique:
	
	  A->B B->A A->B B->A hello Hi, I'm User B,
	  <User_B's_certificate> prove
	  it User A, This Is User B { <digest>[User A, This Is User B] }
	  <User_B's_private_key>
	
	When User A receives User B's first message, User A can examine the certificate,
	check the signature (as in the previous example, by using a digest and public
	key decryption), and then check the subject (that is, User B's name) and see
	that it is indeed User B. User A can then trust that the public key is User B's
	public key, and can request proof of User B's identity.
	
	User B goes through the same process as outlined in the previous example, by
	designing a message digest and then responding to User A with a signed version
	of the digest. User A can verify User B's message digest by using the public key
	from the certificate and checking the result.
	
	A person who may want to interfere with secure communications (in this example,
	User C) can create the following scenario to try to do so:
	
	  A->C C->A A->C C->A hello Hi, I'm User B,
	  <User_B's_certificate> prove
	  it ????
	
	However, User C cannot satisfy User A in the final message. User C does not have
	User B's private key, so User C cannot construct a message that User A will
	believe comes from User B.
	
	Exchanging a Secret
	-------------------
	
	After User A has authenticated User B, User A can send User B a message that only
	User B can decode as follows
	
	  A->B {<secret>}<User_B's_public_key>
	
	where the only way to determine the <secret> is by decrypting the above
	message with User B's private key. Exchanging a secret is another powerful way
	to use public key cryptography. Even if the communication between User A and
	User B is observed, nobody but User B can determine the secret information.
	
	This technique strengthens Internet security by using the secret as another key,
	but in this case it is a key to a symmetric cryptographic algorithm, such as
	Data Encryption Standard (DES), RC4, or IDEA. User A knows the secret because
	User A generated the secret before sending it to User B. User B knows the secret
	because User B has the private key and can decrypt User A's message. Because
	both User A and User B know the secret, they can both start a symmetric cipher
	algorithm and then send messages that are encrypted with the symmetric cipher
	algorithm. The following is a revised protocol that uses this technique:
	
	  A->B B->A A->B B->A A->B B->A hello Hi, I'm User B,
	  <User_B's_certificate>
	  prove it User A, This Is User B { <digest>[User A, This Is User B] }
	  <User_B's_private_key>
	  ok User B, here is a secret {<secret>} <User_B's_public_key>
	  {<some_message>}<secret_key>
	
	The method that is used to compute <secret_key> is up to the protocol that
	is being defined, but <secret_key> can simply be a copy of the secret.
	
	Security Interference
	---------------------
	
	Even if all of the preceding techniques are used, a person who wants to interfere
	with secure communications (User C) may be able to do so. Although User C cannot
	discover the secret that User A and User B have exchanged, User C can interfere
	with their conversation by re-arranging (or garbling) the secret information.
	For example, if User C is sitting between User A and User B, User C can pass
	most of the information back and forth unchanged, but garble certain messages
	(this is easy for User C to do because User C knows the protocol that User A and
	User B are using to communicate):
	
	  A->C C->B B->C C->A A->C C->B B->C C->A A->C
	  C->B B->C C->A
	  hello hello Hi, I'm User B, <User_B's_certificate> Hi, I'm User B,
	  <User_B's_certificate> prove it prove it User A, This Is User B {
	  <digest>[User A,
	  This Is User B] } <User_B's_private_key> User A, This Is User B {
	  <digest>[User A, This Is
	  User B] } <User_B's_private_key> ok User B, here is a secret
	  {<secret>} <User_B's_public_key>
	  ok User B, here is a secret {<secret>} <User_B's_public_key>
	  {<some_message>}<secret_key>
	  Garble[ {<some_message>}<secret_key> ]
	
	User C passes the data without modification until User A and User B share a
	secret. Then User C garbles User B's message to User A. At this point, User A
	trusts User B, so User A may believe the garbled message and try to act on it.
	Note that User C does not know the secret; all User C can do is damage the data
	that is encrypted with the secret key. Depending on the protocol, User C may not
	produce a valid message, but User C may get lucky and produce a valid message.
	
	To prevent this kind of damage, User A and User B can introduce a message
	authentication code into their protocol. A message authentication code is a
	piece of data that is computed by using a secret and some transmitted data. The
	digest algorithm described above has just the right properties for building a
	message authentication code function that can defend against User C:
	
	  <message_authentication_code> := <digest>[ <some_message>,
	  <secret> ]
	
	Because User C does not know the secret, User C cannot compute the correct value
	for the digest. Even if User C randomly garbles messages, the chance of success
	is small if there is a large amount of digest data. For example, by using MD5 (a
	good cryptographic digest algorithm invented by RSA), User A and User B can send
	128-bit message authentication code values with their messages. The odds of User
	C guessing the correct message authentication code are approximately 1 in
	18,446,744,073,709,551,616. For all practical purposes, User C cannot guess the
	correct message authentication code.
	
	The following is the example protocol, revised again to use this technique:
	
	  A->B B->A A->B B->A hello Hi, I'm User B,
	  <User_B's_certificate> prove
	  it User A, This Is User B { <digest>[User A, This Is User B] }
	  <User_B's_private_key> ok
	  User B, here is a secret {<secret>} <User_B's_public_key>
	  {<some_message>,<message_authentication_code>}<secret_key>
	
	User C can attempt to garble messages, but the message authentication code
	computations reveal that the messages do not come from User B. User A or User B
	can discover the incorrect message authentication code value and stop
	communication. User C can no longer impersonate User B.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

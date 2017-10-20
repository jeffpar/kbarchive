---
layout: page
title: "Q147706: How to Disable LM Authentication on Windows NT"
permalink: /kb/147/Q147706/
---

## Q147706: How to Disable LM Authentication on Windows NT

{% raw %}

	Article: Q147706
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbfile kbFEA kbWinNT400sp4fix kbWinNT400sp4fea
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft LAN Manager 
	- Microsoft Windows for Workgroups 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Prior to Windows NT 4.0 Service Pack 4 (SP4), Windows NT supported two kinds of
	challenge/response authentication:
	
	- LanManager (LM) challenge/response
	
	- Windows NT challenge/response (also known as NTLM challenge/response)
	
	Windows NT also supported session security mechanisms that provided for message
	confidentiality and integrity.
	
	To allow access to servers that only support LM authentication, Windows NT
	clients prior to SP4 always use both, even to Windows NT servers that supported
	NTLM authentication.
	
	LM authentication is not as strong as Windows NT authentication so some customers
	may want to disable its use, because an attacker eavesdropping on network
	traffic will attack the weaker protocol. A successful attack can compromise the
	user's password.
	
	Microsoft has developed an enhancement to NTLM called NTLMv2 that significantly
	improves both the authentication and session security mechanisms.
	
	In addition, the implementation of the NTLM Security Service Provider (SSP) has
	been enhanced to allow clients to control which variants of NTLM are used, and
	to allow servers to control which variants they will accept, by setting a new
	registry key appropriately. It also allows clients and servers to require the
	negotiation of message confidentiality (encryption), message integrity, 128-bit
	encryption, and NTLMv2 session security.
	
	These changes affect the following Windows NT components: Any application that
	uses Microsoft remote procedure call (RPC) or that uses the NTLM SSP, use the
	authentication and session security described herein. The Workstation and Server
	services use authentication but support their own session security.
	
	Background
	----------
	
	LM authentication is not as strong as NTLM or NTLMv2 because the algorithm allows
	passwords longer than 7 characters to be attacked in 7 character chunks. This
	limits the effective password strength to 7 characters drawn from the set of
	uppercase alphabetic, numeric, and punctuation characters, plus 32 special ALT
	characters. Users often do not even avail themselves of anything more than
	alphabetic characters.
	
	In contrast, NTLM authentication takes advantage of all 14 characters in the
	password and allows lowercase letters. Thus, even though an attacker
	eavesdropping on the Windows NT authentication protocol can attack it in the
	same way as the LM authentication protocol, it will take far longer for the
	attack to succeed. If the password is strong enough, it will take a single 200
	MHz Pentium Pro computer an average of 2,200 years to find the keys derived from
	it and 5,500 years to find the password itself (or 2.2 years and 5.5 years with
	1,000 such computers, and so forth).
	
	NOTE: This estimate is based on the rate at which the recent RSA Labs "DES
	Challenge" code tests DES keys on a 200 MHz Pentium Pro: 1,000,000/second; and
	the number of DES keys: 2**56 or 7.2*10**16. For more information about the "DES
	Challenge", please see the following Web site:
	
	  http://www.rsa.com/des/
	
	On the other hand, if a password is not strong enough, a dictionary lookup can
	find it in seconds.
	
	One possible way of getting a "strong enough" password is to have it be at least
	11 characters in length, with at least 4 of those characters uppercase, numbers,
	or punctuation. Even if the remaining 7 characters are lowercase low randomness
	text with (say) 3 bits of randomness per character, this will give more than
	DES's key space of 7.2*10**16 possible combinations, and the password will not
	be in dictionaries.
	
	However, hardware accelerators costing $250,000 have been built that can find
	either the LM or NTLM password-derived key in 3-6 days no matter how long the
	password is. These numbers change as technology gets better. For current
	statistics and details please see the following Web site:
	
	  http://www.eff.org/descracker.html
	
	Having the password-derived key of a user does not allow an attacker to log on
	interactively but, with special software, it is sufficient to access network
	resources as that user.
	
	For NTLMv2, the key space for password-derived keys is 128 bits. This makes a
	brute force search infeasible, even with hardware accelerators, if the password
	is strong enough.
	
	If both client and server are using SP4, the enhanced NTLMv2 session security is
	negotiated. It provides separate keys for message integrity and confidentiality,
	and client input into the challenge to prevent chosen plain text attacks, and
	makes use of the HMAC-MD5 algorithm (see RFC 2104) for message integrity
	checking.
	
	Because the datagram variant of NTLM does not have a negotiation step, use of
	otherwise negotiated options, such as NTLMv2 session security and 128- bit
	encryption for message confidentiality, has to be configured.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Control of NTLM security is through the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\control\LSA
	
	NOTE: On Win9x, the valid registry key is LMCompatibility while on Windows NT it
	is LMCompatibilityLevel.
	
	Choice of the authentication protocol variants used and accepted is through the
	following value of that key:
	
	  Value: LMCompatibilityLevel
	  Value Type: REG_DWORD - Number
	  Valid Range: 0-5
	  Default: 0
	  Description: This parameter specifies the type of authentication to be
	  used.
	
	  Level 0 - Send LM response and NTLM response; never use NTLMv2 session
	            security
	  Level 1 - Use NTLMv2 session security if negotiated
	  Level 2 - Send NTLM authenication only
	  Level 3 - Send NTLMv2 authentication  only
	  Level 4 - DC refuses LM authentication
	  Level 5 - DC refuses LM and NTLM authenication (accepts only NTLMv2)
	
	NOTE: Authentication is used to establish a session (username/password). Session
	security is used once a session is established using the apropriate type of
	authenication. Also system times should be within 30 mins of one another.
	Authenication can fail because the server will think the challenge from the
	client has expired.
	
	Control over the minimum security negotiated for applications using NTLMSSP is
	through the following key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\control\LSA\MSV1_0
	
	The following values are for this key:
	
	  Value: NtlmMinClientSec
	  Value Type: REG_DWORD - Number
	  Valid Range: the logical 'or' of any of the following values:
	     0x00000010
	     0x00000020
	     0x00080000
	     0x20000000
	  Default: 0
	
	  Value: NtlmMinServerSec
	  Value Type: REG_DWORD - Number
	  Valid Range: same as NtlmMinClientSec
	  Default: 0
	  Description: This parameter specifies the minimum security to be used.
	     0x00000010  Message integrity
	     0x00000020  Message confidentiality
	     0x00080000  NTLMv2 session security
	     0x20000000  128 bit encryption
	
	LMCompatibilityLevel - Clients
	------------------------------
	
	IMPORTANT: For an SP4 client to choose level 3 or greater, the domain controllers
	for the user's account domains for all users who will use the client (hereafter,
	"the users' domain controllers") MUST have been upgraded to SP4.
	
	If an SP4 client chooses level 0, which is the default, it will interoperate with
	earlier servers exactly as it did with Service Pack 3 (SP3).
	
	If an SP4 client chooses level 1, it will interoperate with earlier servers
	exactly as it did at Service Pack 3 (SP3). In addition, it will negotiate NTLMv2
	session security with SP4 servers.
	
	IMPORTANT: When using level 1 or greater, if the last password change came from a
	Windows for Workgroups or MS-DOS LanManager 2.x client or earlier, the data
	needed for NTLM and NTLMv2 authentication will not be available on the domain
	controller, and SP4 clients will not be able to connect to SP4 servers. The
	workaround is to use level 0, or always change passwords from a Windows NT,
	Windows 95, or Windows 98 client.
	
	If an SP4 client chooses level 2, it will not be able to connect to servers that
	only support LM authentication, such as Windows 95, Windows 98, Windows for
	Workgroups and earlier (hereafter called "downlevel LM clients/servers"), unless
	the users' domain controllers have been upgraded.
	
	If an SP4 client chooses level 3 or greater, it will always send the new NTLMv2
	response. This response can pass through downlevel LM servers and SP3 or earlier
	Windows NT servers and their domain controllers as long as the users' domain
	controllers have been upgraded to SP4. For example, if an SP4 client chooses
	level 3 or greater, the users' domain controllers MUST have been upgraded to SP4
	as well. However, this response will not work with downlevel LM servers in Share
	Level security mode with non-null passwords. The workaround is to configure them
	to use User Level security.
	
	LMCompatibilityLevel - Servers/DCs
	----------------------------------
	
	If an SP4 server chooses level 4 or greater, a user with a local account on that
	server will not be able to connect to it from a downlevel LM client using that
	local account.
	
	If an SP4 domain controller chooses level 4 or greater, a user with an account in
	that domain will not be able to connect to any member server from a downlevel LM
	client using their domain account. Thus, level 4 means that all users with
	accounts on a server or domain have to be using Windows NT to connect.
	
	If an SP4 server chooses level 5 or greater, a user with a local account on that
	server will not be able to connect to it from an SP3 or earlier Windows NT
	client using that local account.
	
	SP4 clients choosing level 0 or 1 will still be able to connect to SP4 servers,
	even with levels 1 or 3 configured, but will be using both the Windows NT
	protocol and the weaker LM protocol. They will also be able to connect to
	downlevel LM servers, even if the users' domain controllers have not been
	upgraded.
	
	Deployment
	----------
	
	Because of the above considerations, if it is preferred to deploy NTLMv2, the
	following steps should be taken:
	
	1. Upgrade the domain controllers where the accounts for all users that are to
	  use NTLMv2 are stored.
	
	2. Even before the upgrade of the domain controllers is completed, clients and
	  servers can be upgraded to SP4 and will obtain enhanced security when
	  connecting SP4 to SP4 by setting level 1.
	
	3. When step 1 is completed, individual systems that have already been upgraded
	  to SP4 can start setting level 3 or greater.
	
	4. If users in some account domain never need to access resources from downlevel
	  LM clients, that domain's domain controllers can have their level set to 4,
	  and after all of those users' systems have been upgraded to SP4, that
	  domain's domain controllers can have their level set to 5.
	
	NtlmMinClientSec and NtlmMinServerSec
	-------------------------------------
	
	If the bit with value 0x00000010 is set in the NtlmMinClientSec or
	NtlmMinServerSec value, the connection will fail if message integrity is not
	negotiated.
	
	If the bit with value 0x00000020 is set in the NtlmMinClientSec or
	NtlmMinServerSec value, the connection will fail if message confidentiality is
	not negotiated.
	
	If the bit with value 0x00080000 is set in the NtlmMinClientSec or
	NtlmMinServerSec value, the connection will fail if NTLMv2 session security is
	not negotiated.
	
	If the bit with value 0x20000000 is set in the NtlmMinClientSec or
	NtlmMinServerSec value, the connection will fail if 128-bit encryption is not
	negotiated.
	
	NOTE: These settings will not guarantee that the NTLM SSP is actually used by
	every application, or that message integrity or confidentiality will actually be
	used by an application even when they are negotiated.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	After installing SP4, perform the following steps to configure LM Compatibility
	level on Windows NT workstations and servers:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa\
	
	3. Click Add Value on the Edit menu.
	
	4. Add the following values:
	
	     Value Name: LMCompatibilityLevel
	     Data Type: REG_DWORD
	     Data:  0 (default) to 5 as defined above
	
	5. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa\MSV1_0
	
	6. Click Add Value on the Edit menu.
	
	7. Add the following values:
	
	     Value Name: NtlmMinClientSec
	     Data Type: REG_DWORD
	     Data:  0 (default) or as defined above
	
	     Value Name: NtlmMinServerSec
	     Data Type: REG_DWORD
	     Data:  0 (default) or as defined above
	
	8. Click OK and then quit Registry Editor.
	
	9. Shut down and restart Windows NT.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbfile kbFEA kbWinNT400sp4fix kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbAudDeveloper kbWin95search kbLanManSearch kbWFWSearch kbZNotKeyword3
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

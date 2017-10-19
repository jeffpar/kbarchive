---
layout: page
title: "Q115319: CONN: Proxy list Contains Local Postoffice Addresses"
permalink: /kb/115/Q115319/
---

## Q115319: CONN: Proxy list Contains Local Postoffice Addresses

	Article: Q115319
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Mail for PC Networks, you may notice that addresses from your
	local Postoffice Address List (POL) have been added to the Microsoft Mail
	Connection 3.2 proxy postoffice list, and may appear twice in the global address
	list.
	
	This problem appears only on postoffices downstream of the Mail Connection
	gateway postoffice.
	
	CAUSE
	=====
	
	This is caused when the administrator of a downstream postoffice exports the
	local postoffice address list to the Mail Connection 3.2 proxy postoffice:
	performing an External-Admin, Export and choosing to export the local postoffice
	address list to ALL postoffices causes ADMIN.EXE to send the addresses as a
	*SPECIAL system message to all external postoffices, including the Mail
	Connection proxy postoffice.
	
	The Mail Connection gateway attempts to deliver this system message to the
	AppleTalk mail system, but returns it as undeliverable because *SPECIAL is not a
	valid proxy name. When External moves the returned message from the gateway
	postoffice to the downstream postoffice, it recognizes the message as a valid
	*SPECIAL system message and adds the addresses contained within the message to
	the Mail Connection proxy postoffice list.
	
	If the global address list is rebuilt (through directory synchronization
	[Dir-Sync] or the REBUILD.EXE utility), each local postoffice user appears twice
	in it.
	
	If you use Dir-Sync, don't use the External-Admin, Export, All command sequence;
	use the Config, Dir-Sync, Requestor, Export sequence instead. For postoffices
	not participating in Dir-Sync, you can avoid this problem by selectively
	exporting the postoffice address list rather than exporting to all postoffices.
	When you select the postoffices to export to, do not include the Mail Connection
	proxy postoffice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Mail Connection
	for PC and AppleTalk Networks. This problem was fixed with Microsoft Mail
	Connection GW version 3.2.4
	
	MORE INFORMATION
	================
	
	If you have encountered this problem, use the following instructions to repair
	the Mail Connection proxy address list and the global address list on the
	downstream postoffice.
	
	1. Use the IMPORT.EXE utility to extract the Mail Connection proxy address list
	  from the Dir-Sync postoffice
	
	        IMPORT admin -ppassword -xMACNET/MACPO -fPROXY.DAT -DM
	
	  where:
	
	     admin = Administrator's mailbox name
	     password = Administrator's mailbox password
	     MACNET/MACPO = The Mail Connection proxy NETWORK/POSTOFFICE
	     PROXY.DAT = Filename to store extracted addresses
	     -DM = Drive letter mapped to Dir-Sync server postoffice
	
	2. Import the extracted Mail Connection proxy addresses into the downstream
	  postoffice
	
	        IMPORT admin -ppassword -f:PROXY.DAT -DN
	
	  where:
	
	     admin = Administrator's mailbox name
	     password = Administrator's mailbox password
	     PROXY.DAT = Name of input file (extracted in step 1)
	     -DN = Drive letter mapped to downstream postoffice
	
	3. If the local postoffice users appear twice in the global address list, run
	  the REBUILD.EXE utility to regenerate the GAL on the downstream postoffice
	
	        REBUILD -DN
	
	  where:
	
	     -DN = Drive letter mapped to downstream postoffice
	
	
	Additional query words: 3.20 duplicate gal pol export dirsync
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	

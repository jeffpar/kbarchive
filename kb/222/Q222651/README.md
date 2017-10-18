---
layout: page
title: "Q222651: XFOR: Dirsync from Novell GroupWise Gateway to MS Mail 3.x POs"
permalink: kb/222/Q222651/
---

## Q222651: XFOR: Dirsync from Novell GroupWise Gateway to MS Mail 3.x POs

	Article: Q222651
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Novell GroupWise Gateway (Beta 1.01 build 3.99) connects the Novell GroupWise
	5.5 Post Office to Microsoft Mail 3.x postoffices. This File Format Application
	Programming Interface (FFAPI) gateway is able to transfer the GroupWise
	addresses to the global address list of the MS Mail postoffice acting as the
	directory synchronization (dirsync) server (DSS). It uses several files to
	transfer the mail, such as Gtwcfg.exe, Mstogw.cfg, Gtwget, and Gtwput. The
	GroupWise addresses are not propagated to the global address list of downstream
	MS Mail postoffices, however.
	
	This article explains the requirements and procedures to propagate the GroupWise
	names to the downstream MS Mail postoffices.
	
	MORE INFORMATION
	================
	
	1. Confirm that mail is flowing between the downstream postoffice and the DSS.
	
	2. Confirm that Microsoft user's address updates are propagated successfully
	  both ways.
	
	3. Confirm that the GroupWise addresses conform to the 10 by 10 by 10 format of
	  Microsoft. This information should be obtained from the manufacturer
	  (http://www.novell.com).
	
	4. In the MS Mail Admin program, on the Config menu, click Dirsync, click
	  Requestor, and click Export (CDRE).
	
	5. Then, on the Config menu, click Dirsync, click Requestor, and click Import
	  (CDRI).
	
	6. Let dirsync cycle for one night.
	
	7. After a successful dirsync, the global address list on the downstream
	  postoffice should be populated with the GroupWise users.
	
	8. Confirm that mail is sent successfully to user names selected from the global
	  address list on the downstream postoffice.
	
	9. If these steps fail, use the IMPORT command with the following switches to
	  export the addresses to a text file and then reimport them.
	
	Command line for export to text file:
	
	  import admin -p<password> -x -fgwise.txt -d<m>
	
	Command line for reimport into dirsync stream:
	
	  import admin -p<password> -e -fgwise.txt -d<m>
	
	In the examples above, <password> refers to the password for the Admin mail
	account, Gwise.txt is the file that contains the addresses that are exported and
	imported, and <m> refers to the drive letter that is mapped to maildata.
	
	This imports all addresses from the FFAPI post office and the MS Mail postoffice
	that hosts the FFAPI post office into the dirsync stream.
	
	GroupWise addresses are of the PCM type (10/10/10) and the post office is created
	by dirsync with a default routing that matches the route to the DSS by default.
	
	IMPORTANT: Check the routing to the FFAPI gateway to be sure routing is correct.
	Routing should be indirect through the postoffice that hosts the FFAPI gateway
	or indirect through the next hop in the path to the postoffice that hosts the
	FFAPI gateway.
	WARNINGS:
	
	- Do not put Beta software in a production environment.
	
	- This gateway is manufactured by Novell, and is not supported by Microsoft.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbhowto
	
	=============================================================================
	

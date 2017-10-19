---
layout: page
title: "Q131638: PC WFW: Client Files for Windows for Workgroups Mail"
permalink: /kb/131/Q131638/
---

## Q131638: PC WFW: Client Files for Windows for Workgroups Mail

	Article: Q131638
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Windows for Workgroups (WFW) version 3.1, the following files
	will be installed for the Mail and Schedule+ clients. The list of files and the
	dates of those files on the WFW 3.1 disks are included below.
	
	NOTE: This information can be used to troubleshoot mixed DLL issues where the WFW
	client is being used with version 3.2 and 3.2a of Microsoft Mail for PC
	Networks.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups version 3.1 Mail client:
	
	Filename       Description                             Size     Date
	-----------------------------------------------------------------------
	
	AB.DLL         Workgroup Mail's Address Book Name      97600    11\1\93
	              Service provider; it supplies to
	              PO List and the Personal Address Book
	
	DEMILAYR.DLL   Workgroup applications system           48304    11\1\93
	              services layer functions
	
	FRAMEWRK.DLL   Workgroup applications                 221168    11\1\93
	              application framework
	              layer functions
	
	MAILMGR.DLL    Workgroup Mail's manager                51632    11\1\93
	              of API support functions
	
	MAPI.DLL       Provides access to simple Mail          54384    11\1\93
	              application programming
	              interface (API)\ 
	
	MSSCHED.DLL    Handles scheduling of events           214992    11\1\93
	              for Schedule+
	
	MSSFS.DLL      Workgroup Mail Shared File System      266464    11\1\93
	              Transport Provider; it sends and
	              retrieves messages to the PO database
	
	SCHEDMSG.DLL   Handles Schedule+ message forms         75968    11\1\93
	              for interfacing with Workgroup
	              Connections Mail
	
	SENDFILE.DLL   Sends files as attachments               6080    11\1\93
	
	STORE.DLL      Message Store Provider that            235072    11\1\93
	              manages the MMF (folders,
	              messages, and attachments)
	
	TRNSCHED.DLL   Provides access to offline              12960    11\1\93
	              and PO calendar file (*.CAL)
	
	VFORMS.DLL     Provides the workgroup                 143264    11\1\93
	              Mail forms
	
	WGPOMGR.DLL    Allows creation of PO and MMF           80224    11\1\93
	              during installation allows the
	              PO owner to manage accounts from
	              within Workgroup mail
	
	MAILSPL.EXE    Program in Workgroup Mail that          51792    11\1\93
	              spools messages from the Outbox
	              to the PO and checks for new
	              messages, which it places in
	              the Inbox
	
	MSMAIL.EXE     Workgroup Mail application             302528    11\1\93
	
	MSREMIND.EXE   Workgroup Schedule+                     28944    11\1\93
	              reminder program
	
	SCHDPLUS.EXE   Workgroup Schedule+ program            489808    11\1\93
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

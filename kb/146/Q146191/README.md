---
layout: page
title: "Q146191: Access Denied Error Copying File Over RAS"
permalink: kb/146/Q146191/
---

## Q146191: Access Denied Error Copying File Over RAS

	Article: Q146191
	Product(s): Microsoft Windows NT
	Version(s): Windows:3.11;WinNT:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to copy a file from a Windows NT computer to a Windows for
	Workgroups 3.11 computer, the following error message appears in Windows for
	Workgroups:
	
	  Access Denied.
	  Make sure the disk is not full or write-protected.
	
	CAUSE
	=====
	
	This problem normally occurs during large file copies (approx. 200K or greater).
	A portion of the file is transferred over the RAS connection before the Windows
	for Workgroups 3.11 RAS client either terminates the session with the server or
	stops responding to the server. In addition, the following factors can lead to
	the symptom mentioned above:
	
	- Outdated network files on the Windows for Workgroups 3.11 RAS client.
	
	- Problems with the phone line, phone cable or serial cable.
	
	RESOLUTION
	==========
	
	To correct this problem, do one or all of the following:
	
	- Install the Windows for Workgroups 3.11 update files from the \CLIENTS\WFW
	  directory on the Windows NT Server compact disc.
	
	- Reduce the modem speed. In Windows for Workgroups 3.11, modify the RAS
	  PhoneBook entry. Click Modem and reduce the Initial Bps value.
	
	- Make sure you are using the correct serial cabling, as documented in the RAS
	  Online Help file.
	
	- Make sure you are not using a 9-to-25-pin converter.
	
	- Contact your local telephone company to verify the quality of your phone
	  line.
	
	- Some network adapters and/or drivers do not function properly in a switched
	  network environment. A common symptom of these cards is not being able to
	  ping over 100 bytes. Replace these adapters.
	
	Additional query words: wfw
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : Windows:3.11;WinNT:3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	

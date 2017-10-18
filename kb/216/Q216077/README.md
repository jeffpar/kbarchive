---
layout: page
title: "Q216077: WD97: Error Saving to NetWare Server After Upgrading to SR-2"
permalink: kb/216/Q216077/
---

## Q216077: WD97: Error Saving to NetWare Server After Upgrading to SR-2

	Article: Q216077
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbdta
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	When you save a file in Microsoft Word, one or both of the following error
	messages may appear:
	
	  There has been a network or file permission error.
	  The network connection may be lost. <Filename.doc>
	
	where Filename.doc is the name of the file that you are trying to save.
	
	-or-
	
	  Make sure that the drive is closed and contains the proper disk or CD.
	
	CAUSE
	=====
	
	This problem may occur if the following conditions are true:
	
	- You saved your file to a Novell NetWare server.
	
	-and-
	
	- You are using the client for Novell Client32 NetWare to access your Novell
	  NetWare server.
	
	-and-
	
	- You have installed Microsoft Office 97 Service Release 2 (SR-2) on your
	  computer.
	
	WORKAROUND
	==========
	
	To work around the problem, you must disable the use of Universal Naming
	Convention (UNC) to access your server by using the "DontUseUNC" registry
	setting. For additional information about using the DontUseUNC registry setting,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q171406 WD97: How to Disable the Use of UNC
	
	Additional query words: wd97 off97 sr2 patch
	
	======================================================================
	Keywords          : kbenv kbnetwork kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

---
layout: page
title: "Q123616: Blank APPSTART Icon"
permalink: /kb/123/Q123616/
---

## Q123616: Blank APPSTART Icon

	Article: Q123616
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbPGC smsdatabase smspgc
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Systems Management Server client's SMS-created program group contains a blank
	icon with the title APPSTART instead of the proper icon for that application.
	Choosing the icon results in the associated program running normally.
	
	CAUSE
	=====
	
	The program item created in SMS Administrator has a name that exceeds 40
	characters. While SMS Administrator allows names up to 64 characters,
	Applications Manager cannot handle names greater than 40 characters.
	
	Applications Manager will log the following information during its watchdog cycle
	when this problem happens.
	
	NOTE: Error 10 translates to NADERR_INVALIDDATASIZE.
	
	APPMAN.LOG
	----------
	
	Checking for transactions to process.
	Checking Integrity of NAD.
	UPD ##> Error setting program item for package 'BPC00014'. (10)
	Checking the server lists for all program items in NAD.
	Updating foreign package master transfer file data.
	
	Additionally, the SMS clients PGC will log errors in its SMSLOG.TXT file:
	
	SMSLOG.TXT
	----------
	
	[12/02/94 09:49:05] Program Group Control ==> Failed to delete the network
	connection k:
	[12/02/94 09:54:04] Program Group Control ==> Could not execute Program
	Manager DDE command [CreateGroup ("MCP Info (SMS)", 0)] [AddItem
	("APPSTART.EXE BPC00025", "")] [ReplaceItem ("")]
	[AddItem("APPSTART.EXE BPC00025","","C:\WINNT\HMSICONS\BPC00025.ICO",0,,,""
	,,0)].
	[12/02/94 09:54:05] Program Group Control ==> Could not execute Program
	Manager DDE command [CreateGroup ("MCP Info (SMS)", 0)] [AddItem
	("APPSTART.EXE BPC00024", "")] [ReplaceItem ("")]
	[AddItem("APPSTART.EXE BPC00024","","C:\WINNT\HMSICONS\BPC00024.ICO",0,,,""
	,,0)].
	[12/02/94 09:54:07] Program Group Control ==> Could not execute Program
	Manager DDE command [CreateGroup ("MCP Info (SMS)", 0)] [AddItem
	("APPSTART.EXE BPC00022", "")] [ReplaceItem ("")]
	[AddItem("APPSTART.EXE BPC00022","","C:\WINNT\HMSICONS\BPC00022.ICO",0,,,""
	,,0)].
	
	WORKAROUND
	==========
	
	Rename the program item to a name of 40 characters or less.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms NAD applications database
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbPGC smsdatabase smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

---
layout: page
title: "Q247276: XFOR: Error Message: Extension MS Could Not Be Loaded"
permalink: /kb/247/Q247276/
---

## Q247276: XFOR: Error Message: Extension MS Could Not Be Loaded

{% raw %}

	Article: Q247276
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Server Administrator program to view the
	properties of the Microsoft Mail Connector object in the Connections container,
	the following error message may be displayed:
	
	  Extension 'MS' could not be loaded.
	
	CAUSE
	=====
	
	This issue can occur if any one of the three following conditions exists:
	
	- The Add-Ins folder on the Exchange Server computer is not shared.
	
	- Either the dynamic-link library (DLL) for the extension that is being loaded,
	  Conadmin.dll, is the incorrect version or the Exchange Server directory
	  version of the Conadmin.dll does not match the actual DLL file version.
	
	- When you gain access to shares on a computer that is running Microsoft
	  Windows NT Server from a Windows NT client and the IRPstackSize parameter is
	  set too low on the server, you may receive the following error message:
	
	  Not enough server storage is available to process this command
	
	RESOLUTION
	==========
	
	The Add-Ins Folder on the Exchange Server Computer Is Not Shared
	----------------------------------------------------------------
	
	To resolve this issue if the cause is the first condition in the "Cause" section
	of this article, set the following correct shares and permissions for the
	Add-ins subfolder:
	
	  Share Name: Add-ins
	  Path: \Exchsrvr\Add-ins
	  Permissions:
	<A0><A0><A0><A0><A0>Everyone: Read
	<A0><A0><A0><A0><A0>Local Administrators Group: Full Control
	<A0><A0><A0><A0><A0>Exchange Service Account: Full Control
	
	If the Add-ins share is not set correctly, you should also check the other
	default shares and permissions. For additional information, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q147376 XADM: Names and Permissions of Exchange Server Shares
	
	Incorrect Version DLL for Conadmin.dll or Mismatch with Exchange Server Directory Version of Conadmin.dll and DLL File Version
	------------------------------------------------------------------------------------------------------------------------------
	
	To resolve this issue if the cause is the second condition in the "Cause" section
	of this article:
	
	1. Verify the build version that you are using. You can do this by checking the
	  properties in the following location:
	
	  Organization\Site\Configuration\Server\<server_name>
	
	2. Check the actual file version of the file on the hard disk drive in the
	  following location:
	
	  Exchsrvr\Connect\Msmcon\Bin\Conadmin.dll
	
	3. If the versions do not match, replace the file manually from the Exchange
	  Server computer or Exchange Server service pack CD-ROM.
	
	4. Verify the file version for the extension DLL. This can be done by checking
	  the properties of:
	
	  Organization\Site\Configuration\Add-Ins\Extension for MS Mail Connector for
	  i386
	
	5. If the file versions do not match, change the version in the directory by
	  using the Exchange Server Administrator program in raw mode.
	
	For additional information about how to change the value by using the
	Administrator program in raw mode, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q196924 XCON: Err Msg: Extension SMTP Could Not Be Loaded
	
	Shares on Computer Running Microsoft Windows NT Server with IRPstackSize Parameter Set Too Low Accessed from a Windows NT Client
	--------------------------------------------------------------------------------------------------------------------------------
	
	To resolve this issue if the cause is the third condition in the "Cause" section
	of this article, either correct the IRPstackSize parameter or apply the fix that
	corrects this problem. For additional information about how to correct the
	IRPstackSize parameter and a fix that corrects this problem, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q198386 Changes in IRP Stack Size in Lanman Server
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

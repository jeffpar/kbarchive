---
layout: page
title: "Q272274: XADM: Information Store Stops Responding on PUSH_NOTIFY Function"
permalink: kb/272/Q272274/
---

## Q272274: XADM: Information Store Stops Responding on PUSH_NOTIFY Function

	Article: Q272274
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Exchange Server 5.5 may stop responding (crash) on the PUSH_NOTIFY function. The
	stack trace is similar to the following:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0156f6d0  004e7348  00000000 0156f718 0156f710 STORE!PUSH_NOTIFY::PushToClient+0xb0
	  0156ff20  004e999c  00000000 0156f718 0156f710 STORE!ScanForOutstandingNotifications+0x104
	  0156ff70  77e6cbe8  00000000 0156f718 0156f710 STORE!EcProcessTask+0x1b4
	  0156ffd0  00000000  00000000 0156f718 0156f710 KERNEL32!BaseThreadStart+0x64
	
	CAUSE
	=====
	
	This problem can occur because the PUSH_NOTIFY class needs to be reference
	counted, but it is not. So the PUSH_NOTIFY class is rarely freed, even though it
	is referenced, which results in a crash.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The Japanese version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	  Date      Time    Version      Size    File name        Platform
	  -------------------------------------------------------------
	  9/22/2000 7:11:57 -          3,837,952 Q272274jpnI.exe  i386
	  9/22/2000 7:07:12 -          4,587,520 Q272274jpnA.exe  Alpha   
	
	After the hotfix is installed, the following files will have the listed
	attributes or later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  9/16/2000 6:26:35 5.5.2654.3 2,621,440 Store.exe     i386
	  9/16/2000 5:56:01 5.5.2654.3 3,682,304 Store.exe     alpha
	  9/16/2000 6:46:52 5.5.2654.3   561,152 Emsmdb32.dll  i386
	  9/16/2000 6:39:14 5.5.2654.3   921,600 Emsmdb32.dll  alpha
	
	NOTE: When you start this version of the information store, the information store
	databases are automatically upgraded to a new format. After the databases have
	been upgraded, you can restore an earlier version of the Store.exe file on the
	server, but only if it is version 5.5.2652.68 or later. If you restore a
	Store.exe file earlier than version 5.5.2652.68 after the database has been
	upgraded, you are no longer able to start the information store. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q244976 XADM: Event ID 1197 and 1005 When Starting the Information Store
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

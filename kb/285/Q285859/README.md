---
layout: page
title: "Q285859: XADM: Mailbox Manager Hangs When You Click the Policy Tab"
permalink: /kb/285/Q285859/
---

## Q285859: XADM: Mailbox Manager Hangs When You Click the Policy Tab

{% raw %}

	Article: Q285859
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click the Policies tab in Mailbox Manager properties, Admin.exe may
	stop responding (hang), and CPU use for Admin.exe may be close to 100 percent.
	
	CAUSE
	=====
	
	This problem occurs because of a flaw in the logic of Mailbox Manager, which
	builds the container tree that is displayed in the dialog box. This problem
	occurs in directories that contain many levels of subcontainers.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Mbclean
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Mbclean.exe | 5.5.2654.55 | 
	+---------------------------+
	| Mbclean.dll | 5.5.2654.55 | 
	+---------------------------+
	
	NOTE: Because of file dependencies, Exchange Server version 5.5 Service Pack 4
	must be applied before you apply this fix.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	If you use a debugger to break into the process, the call stack is similar to
	the following call stack:
	
	  
	
	  ChildEBP RetAddr  Args to Child
	
	  00126a74 01475231 01347b78 01347e30 00000000 MBClean!PropagateParentInfo+0x27e
	  00126d84 014751dc 01347608 01347b78 00000000 MBClean!PropagateParentInfo+0x211
	  00127094 0147529e 01347608 013478b8 65726150 MBClean!PropagateParentInfo+0x1bc
	  001273a4 0147529e 01347358 00000000 65726150 MBClean!PropagateParentInfo+0x27e
	  001276b4 014751dc 01346b20 01347090 65726150 MBClean!PropagateParentInfo+0x27e
	  001279c4 01476533 01346b20 01346dd0 00129d2d MBClean!PropagateParentInfo+0x1bc
	  00128cfc 014699d1 01346b20 00b4a380 00000001 MBClean!InitializeTreeFromData+0x273
	  0012ad50 6c378eac 01476d4b 000c0598 00000110 MBClean!CMCAAdminDlg__OnInitDialog+0x371
	  0012ad54 01476d4b 000c0598 00000110 00000000 MFC42!AfxDlgProc+0x2e 
	  00000110 00000000 00000000 00000000 00000000 MBClean!AdminDlgProc+0x8b
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

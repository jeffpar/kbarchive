---
layout: page
title: "Q234162: SMS: Remote Control May Not Work If User Name Contains a Space"
permalink: /kb/234/Q234162/
---

## Q234162: SMS: Remote Control May Not Work If User Name Contains a Space

	Article: Q234162
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbHelpDesk kbsms200sp2fix
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to remotely control a Microsoft Windows 95 or Microsoft Windows
	98 client, the Remote Control session may time out without prompting the user
	for permission if there is a space in the administrator's user name and the
	"Display a message to ask for permission" option is enabled.
	
	In most cases, the "Asking for User's Permission" dialog box is displayed,
	immediately followed by a "The user did not grant permission before the timeout
	period elapsed" message. The user at the client computer typically is not
	prompted to grant permission to the administrator.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	Remove the space from the user name for the administrator account in use. For
	example, change "Help Desk" to "HelpDesk" or use any other name that does not
	contain a space.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbHelpDesk kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

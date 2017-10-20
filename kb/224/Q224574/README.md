---
layout: page
title: "Q224574: SMS: Remote Control Installation Fails to Recognize LANDesk 6.x"
permalink: /kb/224/Q224574/
---

## Q224574: SMS: Remote Control Installation Fails to Recognize LANDesk 6.x

{% raw %}

	Article: Q224574
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): _IK964 kbsms200 kbsms200bug kbRemoteProg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server version 2.0 fails to correctly identify LANDesk 6.x as
	a third-party Remote Control software package. If a computer is configured to
	use LANDesk version 6.x and the client computer is moved into a Systems
	Management Server 2.0 site where Remote Tools client agent has been enabled,
	LANDesk is overwritten. Systems Management Server 2.0 does not recognize that
	this was a LANDesk client. The Systems Management Server remote tools are
	installed over the LANDesk tools, thus replacing Kbstuff.sys and replacing other
	registry settings. This effectively disables the LANDesk Remote Control
	functionality on that particular client. If Intel LANDesk version 6.x has been
	deployed to the site, and you want to enable Systems Management Server 2.0
	Remote Control at the site but do not want existing LANDesk users to migrate
	from LANDesk Remote Control to Systems Management Server 2.0 Remote Control, you
	can place a text file with the name Wuser32.exe in the System32 directory. This
	"fools" Systems Management Server into thinking that this is another third-party
	Remote Control utility and does not overwrite the LANDesk installation. This
	fake Wuser32.exe file must be removed before Systems Management Server 2.0 will
	install the Systems Management Server version of Remote Control.
	
	CAUSE
	=====
	
	When Systems Management Server 2.0 installs the Remote Control component, it
	performs a search of the top-level directories on all the local hard disk drives
	for a file called Wuser32.exe or Wuser.exe. Previous versions of Intel LANDesk
	installed to C:\LDClient. LANDesk version 6.x installs into the C:\Program
	Files\LDClient directory. When the Remote Control installation program searches
	for the Wuser32.exe or Wuser.exe file, it fails to find the file because the
	search is not deep enough.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	Additional query words: prodsms lan desk
	
	======================================================================
	Keywords          : _IK964 kbsms200 kbsms200bug kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

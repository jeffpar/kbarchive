---
layout: page
title: "Q201397: SMSINST: Custom Dialogs May Contain Blank Controls"
permalink: kb/201/Q201397/
---

## Q201397: SMSINST: Custom Dialogs May Contain Blank Controls

	Article: Q201397
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsInst
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Systems Management Server Installer custom dialog is displayed to the
	screen as part of a compiled script, one or more controls on the dialog may
	appear blank.
	
	CAUSE
	=====
	
	A change was made to the Installer after version 1.00.04 which can affect the
	display of dialog controls. If a dialog contains one or more controls which
	contain Installer variables that have not been previously initialized within the
	script, the controls listed in the Tab Order after the use of an un-initialized
	variable will be displayed with blank text.
	
	WORKAROUND
	==========
	
	The symptoms can be prevented using the following methods:
	
	- Within the SMS Installer Script Editor, review the names of the variables
	  used within Custom Dialogs which are affected by the problem. At a convenient
	  point prior to the Custom Dialog item, define the variables using the Set
	  Variable script item. If the variables will be initially blank simply use the
	  Set Variable script action to initialize the variable to nothing.
	
	- Within Custom Dialog Editor the Layout, Set Tab Order menu item can be used
	  to set the precedence of each control within the Custom Dialog. If there are
	  only a few controls containing un-initialized variables within the Custom
	  Dialog, they can be left as the last controls within the Tab Order. This
	  method is also known to prevent the display of blank controls.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0.
	
	Additional query words: prodsms custom dialog blank missing empty smsinst
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsInst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	

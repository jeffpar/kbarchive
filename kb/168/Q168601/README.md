---
layout: page
title: "Q168601: SMSINST: Dialog Boxes Are Sized by the First Dialog Box"
permalink: /kb/168/Q168601/
---

## Q168601: SMSINST: Dialog Boxes Are Sized by the First Dialog Box

	Article: Q168601
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsinst
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create custom dialog boxes using the Custom Dialog Editor, when the
	installation runs after the first dialog box is displayed, subsequent dialog
	boxes are made the same size, even if their overall size is smaller or larger.
	
	CAUSE
	=====
	
	The Custom Dialog Editor is a wizard that creates dialog boxes that share common
	characteristics. This includes size and common controls like the Back, Next, and
	Cancel buttons. If you have a list of dialog boxes that are different sizes or
	that do not have common elements, you should place those dialog boxes outside of
	a wizard block.
	
	STATUS
	======
	
	This is by product design.
	
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

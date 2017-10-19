---
layout: page
title: "Q150078: MIFWIN Does Not Open Form Specified"
permalink: /kb/150/Q150078/
---

## Q150078: MIFWIN Does Not Open Form Specified

	Article: Q150078
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you send out a new form to the client there is no way to specify the new
	form as the default form. Running MIFWIN "formname" does not bring up the
	specified form.
	
	CAUSE
	=====
	
	MIFWIN does not accept command line parameters. Therefore, the form name passed
	to it is ignored.
	
	RESOLUTION
	==========
	
	MIFWIN loads the forms in alphabetical order. Naming the new form with a name
	that comes after the client's other forms, alphabetically, will bring the new
	form up as the default form. For example, if the client has a form named
	uninfo.xnf, sending out new form with the name tnewform.xnf will bring up the
	new form as the default form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

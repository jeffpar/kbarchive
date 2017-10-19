---
layout: page
title: "Q321280: SMS: Installer &quot;Parse String&quot; Action Leaves Undeclared String"
permalink: /kb/321/Q321280/
---

## Q321280: SMS: Installer &quot;Parse String&quot; Action Leaves Undeclared String

	Article: Q321280
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 14-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the wizard creates SMS Installer code, or if you create code by using the
	Parse String action, you can parse a string and split it into separate
	variables. However, in SMS Installer version 2.0.148, if you parse a string into
	a single string, the rest of the string is allocated to a null variable (%%).
	Therefore, if you want to display a dialog box that contains a percent character
	(%), which requires using double percent characters (%%), you get the remainder
	of the parsed string instead of a percent character.
	
	This works as expected in earlier versions of SMS Installer.
	
	WORKAROUND
	==========
	
	To work around this problem, declare the rest of the string in the second
	variable of the Parse String action.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SMS Installer 2.0.148.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

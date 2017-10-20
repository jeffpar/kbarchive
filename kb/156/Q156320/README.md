---
layout: page
title: "Q156320: XCLN: Contributor Unable to Submit Form to Public Folder"
permalink: /kb/156/Q156320/
---

## Q156320: XCLN: Contributor Unable to Submit Form to Public Folder

{% raw %}

	Article: Q156320
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a form installed in a Public Folder for which you have
	contributor privileges, the following error message may appear:
	
	  The folder could not be opened. You need additional permission to perform
	  this operation. See your administrator.
	
	CAUSE
	=====
	
	The behavior is due to the design of the Public Folder permission hierarchy and
	how forms are composed.
	
	WORKAROUND
	==========
	
	To work around this problem, try one of the following.
	
	1. Add the Public Folder to the Global Address List (GAL).
	
	  a. In the Admin.exe program, select the properties for the Public Folder.
	
	  b. On the Advanced tab, clear the "Hide from Address Book" check box.
	
	2. Create the form as a send form instead of a post form and mail it to the
	  Public Folder.
	
	-or-
	
	If the form has already been designed as a post form (and has not been
	extended):
	
	1. Create a new send form.
	
	2. Copy and paste the controls from the old form to the new form.
	
	-or-
	
	If the form must be a post form, try one of the following two workarounds:
	
	1. Configure, at minimum, Reviewer privileges for all accounts that will
	  contribute.
	
	2. Create a rule in the public folder that contains the folder application, to
	  auto forward all items to another Public Folder that only a selected few have
	  privileges to.
	
	-or-
	
	1. Install the folder application to an accessible folder (like a personal
	  folder).
	
	2. After starting the form from the personal folder, submit the item and drag it
	  from the accessible folder to the destination Public Folder, which also
	  contains the same folder application.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}

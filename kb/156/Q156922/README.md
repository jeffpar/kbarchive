---
layout: page
title: "Q156922: BUG: Disabled Pages in Container Class Appear Enabled"
permalink: kb/156/Q156922/
---

## Q156922: BUG: Disabled Pages in Container Class Appear Enabled

	Article: Q156922
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbtool kbui kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When disabling a page in a PageFrame object within a container class, the
	disabled page from the PageFrame appears enabled when subclassing the container
	class.
	
	WORKAROUND
	==========
	
	For the disabled page to show up as disabled at run time, put the following code
	in the Init event of the disabled page:
	
	     THIS.Enabled = .F.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you are creating a container class that has a PageFrame object in it and
	you disable a page in the PageFrame, the page that was disabled in the container
	class shows up as if it were enabled at design time if you try to subclass the
	container class.
	
	However, if you edit the container class and then click on the disabled page, it
	disables itself properly but it always appears at first to be enabled.
	
	At run time, the disabled page looks like it is enabled, but you cannot select
	the disabled page.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Use the Class Designer to create a container class.
	
	2. Place a PageFrame in the container class and set the PageCount property to 3.
	
	3. Set the Enabled property of the third page to False (.F.).
	
	4. Create a form.
	
	5. Drop the Container class that you just created in the Class Designer onto the
	  form.
	
	The disabled page now appears enabled.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbtool kbui kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

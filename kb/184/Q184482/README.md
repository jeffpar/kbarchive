---
layout: page
title: "Q184482: WD97: Unable to Show UserForms in Other Projects"
permalink: /kb/184/Q184482/
---

## Q184482: WD97: Unable to Show UserForms in Other Projects

{% raw %}

	Article: Q184482
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are compiling a module that attempts to show a UserForm contained in
	another Visual Basic for Applications project, the "Object Required" error
	message appears.
	
	CAUSE
	=====
	
	Microsoft Word cannot directly show a UserForm that is contained in another
	Visual Basic for Applications project.
	
	WORKAROUND
	==========
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	In the following Visual Basic for Applications example, two projects are used:
	Project1 and Project2. Project1 contains the macro code that calls Project 2.
	Project2 displays the UserForm. In this example, both UserForms can have the
	same name, because the .Show method always shows the UserForm in the current
	project.
	
	1. Make sure that each project has a unique name (as shown in the Properties
	  window for each project).
	
	2. In the Project Explorer window, select Project1.
	
	3. On the Tools menu, click References.
	
	4. In the "References - VBAProject1" dialog box, click to select the Project2
	  check box, and then click OK.
	
	5. In a module sheet in VBAProject1, enter the following code:
	
	  Sub Test1()
	
	      Application.Run "ProjectTemplate.Module1.Test2"
	        'call the subroutine in Project2
	
	  End Sub
	
	6. In a module sheet in Project2, enter the following code:
	
	  Sub Test2()
	
	      UserForm1.Show
	
	  End Sub
	
	7. Run the "Test1" macro in Project1.
	
	The UserForm in Project2 now appears without generating an "Object Required"
	error message.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

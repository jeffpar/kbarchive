---
layout: page
title: "Q201358: XCLN: Cannot Generate/View Forms Created in Form Design Wizard"
permalink: /kb/201/Q201358/
---

## Q201358: XCLN: Cannot Generate/View Forms Created in Form Design Wizard

	Article: Q201358
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:97; winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create HTML forms in the Microsoft Exchange Forms Design Wizard Sample
	Apps, some output files fail to get generated after you install the Microsoft
	Outlook HTML Form Converter that is included with Exchange Server 5.5 Service
	Pack 1 on the same computer. Because all the necessary output files are not
	generated with the Form Design Wizard, you will fail to see these forms from an
	Outlook Web Access client.
	
	CAUSE
	=====
	
	The Microsoft Exchange Form Design Wizard that is included with Exchange Server
	5.5 and the Microsoft Outlook HTML Form Converter perform two separate functions
	and are not meant to co-exist.
	
	WORKAROUND
	==========
	
	Do not install the Microsoft Outlook HTML Form Converter, FCSetup.exe, on the
	same computer as the Microsoft Exchange Form Design Wizard Sample Apps.
	
	MORE INFORMATION
	================
	
	With the Microsoft Exchange Form Design Wizard, you can quickly create
	customized HTML forms based on the built-in forms included with Microsoft
	Outlook Web Access without first creating your form with the Outlook Form
	Designer. Additional layout and formatting enhancements can then be created in
	an HTML/ASP editor such as Microsoft FrontPage. Additional scripting
	enhancements can be developed with a script editor such as Microsoft Visual
	InterDev.
	
	The following types of form are supported by the Form Design Wizard:
	
	- Forms used to post information directly to public folders (based on the item
	  type IPM.Post)
	
	- Forms used to send information to other recipients (based on the item type
	  IPM.Note)
	
	To install the Microsoft Exchange Form Design Wizard, run the Fdsetup.exe program
	in the Server\Support\Collab\Sampler\Formwiz subdirectory on the Microsoft
	Exchange Server 5.5 CD-ROM. This expands the wizard's files into a temporary
	directory on your computer, and starts the main Setup program.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange550SP1
	Version           : WINDOWS:97; winnt:5.5 SP1
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

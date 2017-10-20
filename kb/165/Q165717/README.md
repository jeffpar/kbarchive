---
layout: page
title: "Q165717: WD97: Errors Installing Avery Wizard"
permalink: /kb/165/Q165717/
---

## Q165717: WD97: Errors Installing Avery Wizard

{% raw %}

	Article: Q165717
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbProgramming kbtool word97
	Last Modified: 26-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Avery Wizard, the setup program stops responding, or you
	receive the following error message:
	
	  Can't quit at this time
	
	followed by:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an invalid page fault in unknown at 0000:6510165b.
	
	NOTE: The actual memory address may vary.
	
	CAUSE
	=====
	
	The Avery Wizard setup installs macros to make the wizard run; it then closes
	Word before Microsoft Visual Basic for Applications can complete the operation
	and close.
	
	This behavior occurs when all of the following conditions are true:
	
	- Microsoft Office 97 is installed.
	
	  -and-
	
	- Microsoft Word 97 and the Office Assistant components are installed.
	
	  -and-
	
	- Microsoft Word 97 has never been started.
	
	RESOLUTION
	==========
	
	The Avery Wizard is installed successfully with no adverse effect caused by
	these error messages. To prevent these error messages from appearing during the
	installation of the Avery Wizard, install version 2.0 or later.
	
	STATUS
	======
	
	This behavior occurs when you install versions of the Avery Wizard earlier than
	version 2.0. This behavior was corrected in version 2.0 and later of the Avery
	Wizard.
	
	
	MORE INFORMATION
	================
	
	The Avery Wizard is used to format and print on Avery LaserJet and InkJet
	products.
	
	NOTE: The Avery Wizard is a third-party add-on for Microsoft Word that can also
	be found in the ValuPack folder on the Microsoft Word 97 for Windows and the
	Microsoft Office 97 for Windows CD-ROM disk.
	
	For information about how to contact Avery Dennison, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Or consult Avery Wizard Help for support contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: vb vba vbe can t
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbProgramming kbtool word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

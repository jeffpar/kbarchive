---
layout: page
title: "Q166131: BUG: Class with Data Source Causes Type 11 Error"
permalink: /kb/166/Q166131/
---

## Q166131: BUG: Class with Data Source Causes Type 11 Error

{% raw %}

	Article: Q166131
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbvfp300bBUGkbbuglist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a class with a data source is instantiated with a CREATEOBJECT() command,
	or by placing the class on a form, the following error occurs:
	
	  Sorry, a system error occurred
	  "Microsoft Visual FoxPro"
	  error type 11
	
	The operating system closes Visual FoxPro. However, sometimes the machine hangs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a class based on a combobox object by entering the following command
	  in the Command window:
	
	        CREATE CLASS test OF test.vcx AS combobox
	
	2. In the Property sheet of the class, set the following properties of the
	  class:
	
	        RowSource: SYS(2004)+ 'samples\data\customer.dbf'
	        RowSourceType: Alias
	
	3. Save the class.
	
	4. Type the following lines of code in the Command window:
	
	        CREATE FORM Ztest
	
	5. Click the View Classes button on the Form Controls Toolbar and select Add.
	  Locate and add the Test class created in step 1.
	
	6. Place the Test class combo box on the form and run the form. The error
	  message may occur when placing the class on the form or when the executing
	  the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300bBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}

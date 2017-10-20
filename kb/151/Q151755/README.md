---
layout: page
title: "Q151755: Spindate.exe - DateTime Spinner Class Example"
permalink: /kb/151/Q151755/
---

## Q151755: Spindate.exe - DateTime Spinner Class Example

{% raw %}

	Article: Q151755
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbOOP kbvfp300 kbvfp500 kbvfp600
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Spindate.exe is a sample that demonstrates how to combine the functionality and
	appearance of the Spinner with a text box holding DateTime data.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Spindate.exe
	  (http://download.microsoft.com/download/vfox60/example/1/W9X/EN-US/Spindate.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	By design, spinners alone can be used only with numeric data. However, using a
	Custom container class, you can combine the functionality and appearance of the
	Spinner with a text box holding DateTime data.
	
	This sample also allows you easier access to the data you are working with by
	providing custom ControlSource and Value properties, which work with the
	cntSpinDate class just as they do with other objects.
	
	The changes to the Date and Time are based on where you place the cursor in the
	TextBox control. You may also use the Up and Down arrow keys to activate the
	Spinner events. A second text box displaying the corresponding Day of the Week
	is updated as changes are made. You can use the "Reset" button to set the text
	box value to the current Date and Time.
	
	NOTE: The ControlSource property for the custom controls must be manually entered
	in the Property sheet.
	
	To use this class with Visual FoxPro version 3.0 or 3.0b, you need to compile the
	class library first with this command:
	
	     COMPILE FORM Spindate.vcx
	
	Spindate.exe contains the following files:
	
	  Readme.txt   -- contains a description of the class
	  Spindate.vcx -- contains the cntSpinDate class
	  Spindate.vct
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbOOP kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q103197: PC Forms: Debugging Forms Opened in Mail"
permalink: /kb/103/Q103197/
---

## Q103197: PC Forms: Debugging Forms Opened in Mail

{% raw %}

	Article: Q103197
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Normally, when a user reads or opens an electronic form (E-form) created in
	version 1.0 of Microsoft Electronic Forms Designer, Microsoft Mail for PC
	Networks directly executes the .EXE file specified in the custom message
	declaration in the MSMAIL.INI or SHARED.INI file.
	
	When you debug a Read or Compose form used to display an unsent message, it is
	useful to have Mail start Microsoft Visual Basic for Windows in design mode on
	the E-form's project so you can set break points and step through the E-form
	code.
	
	MORE INFORMATION
	================
	
	The following steps describe how to debug an electronic form in design mode:
	
	1. In the [Custom Messages] section of the MSMAIL.INI file, modify the
	  command-line parameter of the custom message declaration for the E-form so it
	  includes the path to VB.EXE, the path to the project file for the E-form
	  (EFORM.MAK), and a /CMD flag before the other command-line arguments passed
	  to Visual Basic.
	
	  The two sample declarations below show how to modify the command-line
	  parameter of the custom message declaration for a sample E-form. The paths
	  specified in the declaration are only examples; the paths in your declaration
	  will depend on the location of the files on your machine.
	
	  Normal Declaration Example
	  --------------------------
	
	  IPM.VendorName.Sample=3.0;;Sample Form;;C:\WINDOWS\SYSTEM\MEFLIB.DLL;
	  <MC:IPM.VendorName.Sample>C:\VB\EFORMS\PROJECTS\SAMPLE\SAMPLE.EXE -MSG
	  <COMMAND><MESSAGEID>;1111111000000000;Sample Form;;;
	
	  Debugging Declaration Example
	  -----------------------------
	
	  IPM.VendorName.Sample=3.0;;Sample Form;;C:\WINDOWS\SYSTEM\MEFLIB.DLL;
	  <MC:IPM.VendorName.Sample>C:\VB\VB.EXE
	  C:\VB\EFORMS\PROJECTS\SAMPLE\EFORM.MAK /CMD-MSG
	  <COMMAND><MESSAGEID>;1111111000000000;Sample Form;;;
	
	2. Exit and restart Mail.
	
	3. Exit Microsoft Visual Basic, if it is running.
	
	4. Read or compose a message using the form. Instead of the E-form, Microsoft
	  Visual Basic appears and you can step through the E-form code. You must exit
	  Microsoft Visual Basic each time you open a new message in Mail.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}

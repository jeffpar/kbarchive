---
layout: page
title: "Q221669: FIX: Return of COM Server Objref Causes Server to Not Release"
permalink: /kb/221/Q221669/
---

## Q221669: FIX: Return of COM Server Objref Causes Server to Not Release

{% raw %}

	Article: Q221669
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have an application that instantiates a COM server object and stores a
	reference to it in a variable. The COM object instantiates a second COM server
	object and returns an object reference to it. Even if the variable containing
	the reference to the first COM server is released, the first COM server remains
	in memory until the second COM server is released.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure that no instances of Excel are running, and only a single instance
	  of Visual FoxPro is running.
	
	2. Run the following code from a program (.PRG) file:
	
	  #DEFINE CR_LF CHR(13)+CHR(10)
	  CLEAR ALL
	  LOCAL oVFP, oExcel
	  * Create VFP as a COM server
	  oVFP=CREATEOBJECT("visualfoxpro.application")
	
	  * Tell the server to create Excel as COM server, and return it
	  oExcel = oVFP.EVAL("createobject('excel.application')")
	  ?oExcel.NAME		&& Returns Excel
	
	  =MESSAGEBOX('Check the task manager or task list.'+ CR_LF + CR_LF + ;
	     'You will see 2 instances of VFP and 1 of Excel.'+ CR_LF + ;
	     'Press OK to proceed.',16, 'MessageBox 1')
	
	  * Release VFP server reference
	  oVFP = NULL
	  =MESSAGEBOX('Check the task manager or task list.'+ CR_LF + CR_LF + ;
	     'You will STILL see 2 instances of VFP and 1 of Excel.'+ CR_LF + ;
	     'Press OK to proceed.', 16, 'MessageBox 2')
	
	  * The following releases all servers OK
	  CLEAR ALL
	
	3. When MessageBox 1 is displayed, look at the list of running programs in the
	  Windows NT Task Manager or the Windows 9x task list. You will see two
	  instances of Visual FoxPro and one instance of Excel. This is as expected.
	
	4. Click OK in MessageBox 1.
	
	5. When MessageBox 2 is displayed, again look at the list of running programs in
	  the Windows NT Task Manager or the Windows 9x task list. You will still see
	  two instances of Visual FoxPro and one instance of Excel. One of the
	  instances of Visual FoxPro should have been released.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

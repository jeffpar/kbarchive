---
layout: page
title: "Q192071: PRB: OLE EXE Called By FoxISAPI On PWServer Leaves INI Files"
permalink: /kb/192/Q192071/
---

## Q192071: PRB: OLE EXE Called By FoxISAPI On PWServer Leaves INI Files

{% raw %}

	Article: Q192071
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling a custom OLE .exe from the FoxISAPI extension on Windows 95 and
	Windows 98, through the Personal Web Server, the .ini files created are not
	automatically deleted.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project called MyTest in a new directory.
	
	2. Create a new program file in the project and place in the following code:
	
	        DEFINE CLASS MyClass AS CUSTOM OLEPUBLIC
	           PROCEDURE MyProc
	           LPARAMETERS cParm1, cIniFile, nPersistInstance
	              nPersistInstance = 0
	              RETURN "<HTML><BODY><b>cParm1= </b>" + cParm1 + ;
	              "<br><b>cIniFile= </b>" + cIniFile + ;
	              "<br><b>nPersistInstance= <b>" + ;
	              STR(nPersistInstance) + "</BODY></HTML>"
	           ENDPROC
	        ENDDEFINE
	
	3. Build the project into MyTest.exe.
	
	4. Place the following files into the INetPub\Scripts directory:
	
	  MyTest.exe
	  FoxISAPI.dll
	  FoxISAPI.ini
	  VFP6Run.exe
	
	5. Run the OLEISAPI application through Internet Explorer. Here is a sample line
	  to execute this through FoxISAPI from the server computer:
	
	     http://LOCALHOST/SCRIPTS/FOXISAPI.DLL/MYTEST.MYCLASS.MYPROC
	
	6. Click the Refresh button a couple of times.
	
	Please note the existence of several .ini files in the INetPub\Scripts\ directory
	that were not there previously.
	
	Additional query words: kbVFp600 kbISAPI kbInternet kbCOMt
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

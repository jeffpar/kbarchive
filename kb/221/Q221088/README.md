---
layout: page
title: "Q221088: PRB: Loading COM DLL from ASP Stops IIS if FoxUser is Corrupted"
permalink: /kb/221/Q221088/
---

## Q221088: PRB: Loading COM DLL from ASP Stops IIS if FoxUser is Corrupted

{% raw %}

	Article: Q221088
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAppSetup kbCOMt kbInternet kbOOP kbvfp600 kbGrpDSFox
	Last Modified: 09-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Loading an ASP that calls a Visual FoxPro COM DLL stops the FTP Publishing
	Service and the World Wide Web Publishing Service (WWW) on the Windows NT Server
	that is running Internet Information Server (IIS).
	
	CAUSE
	=====
	
	This is known to happen if the FoxUser.dbf resource file that the Visual FoxPro
	runtime that the COM DLL is using is corrupted.
	
	RESOLUTION
	==========
	
	There are at least two resolutions to this:
	
	- Delete the corrupted FoxUser file. The Visual FoxPro runtime will recreate
	  one. Alternately, a valid FoxUser resource file can be provided.
	
	- Add a Config.fpw file as an included file in the project when building the
	  COM DLL. This Config.fpw file should contain the RESOURCE=OFF command. This
	  will prevent the COM DLL from trying to use a resource file.
	
	Please note that in Visual Studio 6.0 SP3 for Visual FoxPro, the FoxUser file is
	no longer created or loaded by the runtime when loading a COM DLL.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The resource file is a Visual FoxPro table that contains information on system
	and user-defined resources such as keyboard macros, preferences, system window
	locations and sizes, diary entries, and so on. By default, it is named
	FoxUser.dbf.
	
	The SET RESOURCE TO <filename> command can be used within Visual FoxPro or
	a Visual FoxPro runtime to set the resource file to the desired file. The
	SYS(2005) function can be used to determine the name and location of the
	resource file. The SET("Resource") command can be used to determine if the
	resource file is being used. SYS(2005) will still report the name and location
	of the resource file even if it is not currently being used.
	
	Trying to load a Visual FoxPro COM DLL that uses a runtime that tries to use a
	corrupted resource file will generate the following error messages in Visual
	FoxPro and Visual Basic or Visual Basic for Applications:
	
	In a Visual FoxPro runtime exe (with RESOURCE=OFF in its Config.fpw):
	
	  OLE error code 0x80040154: Class not registered
	
	In Visual Basic or Visual Basic for Applications:
	
	  Run-time Error '429'
	  ActiveX component can't create object.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Obtain the following Microsoft Knowledge Base article:
	
	  Q168053 HOWTO: Use VFP Automation Servers with Active Server Pages
	
	2. Implement it on Internet Information Server(IIS) so that it functions
	  properly.
	
	3. Find the FoxUser.dbf file that the Visual FoxPro runtime is using. A good
	  place to look is in the \Winnt\System32 directory on the Windows NT Server.
	  To facilitate determining the FoxUser file being used by the runtime, the
	  following code can be added to the Visual FoxPro code in the article after
	  the other two procedures but before the ENDDEFINE:
	
	  	PROCEDURE getresource
	  		x=SYS(2005)
	  		IF !EMPTY(x)
	  			RETURN x+" and it is "+SET("Resource")
	  		ELSE
	  			RETURN "There is no resource file"
	  		ENDIF
	  	ENDPROC
	
	4. Rebuild the COM DLL and replace the ASPSrv.dll, ASPSrv.vbr, and ASPSrv.tlb on
	  the NT Server. Then the following lines of code can be added to the Active
	  Server Page, right above the </BODY> tag:
	
	  <P>
	  The Resource File info is: <%VFPSrv.GetResource()%>
	  <P>
	
	5. Load the ASP after these modifications and it will report the FoxUser file
	  being used.
	
	6. Corrupt the FoxUser that the Visual FoxPro runtime is using. An easy way to
	  do this is to open FoxUser.dbf in Notepad and delete the first couple of
	  lines in it. Note that the FTP Publishing and WWW Publishing services on the
	  NT Server may need to be stopped to allow access to the FoxUser file. Be sure
	  to restart them after corrupting the FoxUser file.
	
	7. Open the Services control panel on the Windows NT Server. Locate the World
	  Wide Web Publishing Service. Note that is should currently be Started.
	
	8. Reload the ASP and then check the WWW Publishing Service in the Services
	  control panel. It should now be Stopped. The Services control panel may need
	  closed and reopened to refresh. Internet Explorer should also report the
	  following:
	
	  Internet Explorer cannot open the Internet site
	  http://yourserver/VFPSrv.ASP.
	  A connection with the server could not be established
	
	REFERENCES
	==========
	
	For additional information about use Visual FoxPro COM DLLs with Active Server
	Pages, please see the following article in the Microsoft Knowledge Base:
	
	  Q168053 HOWTO: Use VFP Automation Servers with Active Server Pages
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAppSetup kbCOMt kbInternet kbOOP kbvfp600 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q191638: HOWTO: Programmatically Access the Registry in Visual FoxPro"
permalink: /kb/191/Q191638/
---

## Q191638: HOWTO: Programmatically Access the Registry in Visual FoxPro

{% raw %}

	Article: Q191638
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbFFC kbMDAC250
	Last Modified: 27-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 6.0 contains the new Foundation Classes (FFC) that offer support
	for a wide variety of database and application functionality. One of the more
	important tasks of today's applications is the ability to access the Registry.
	The FFC includes a class library called Registry.vcx, which contains useful
	classes for accessing the Registry. This paper discusses ways to use these
	classes in your applications.
	
	MORE INFORMATION
	================
	
	You can use the Registry.vcx class library included in the \FFC folder of Visual
	FoxPro 6.0 to access the Windows Registry. The classes included in the
	Registry.vcx, access the Registry by making calls using the Visual FoxPro
	DECLARE command to call directly into the Win23 API routines. The class library
	consists of the following classes:
	
	Registry
	--------
	
	This is the core class that contains most of the methods you need to access
	(read/write) the Registry. There are many useful purposes for accessing the
	Registry in an application.
	
	The following example goes through the Registry to obtain a list of registered
	ActiveX controls installed on your system. The results are stored in a public
	array called aControls:
	
	     cOptPath = "CLSID"
	     public aControls
	     DIMENSION aControls[1,2]
	     STORE "" TO aControls
	     DIMENSION aCLSIDs[1]
	
	     oReg = NewObject("Registry",HOME()+"FFC\REGISTRY")
	     IF oReg.EnumOptions(@aCLSIDs,cOptPath,"",.T.) # 0
	        RETURN .F.
	     ENDIF
	     FOR i = 1 TO ALEN(aCLSIDs)
	        IF m.i%10 = 0
	           WAIT WINDOW NOWAIT "Processed "+STR(m.i)+" of "+STR(ALEN(aCLSIDs))
	        ENDIF
	        DIME aKeys[1]
	        DIME aProgID[1,2]
	        DIME aControlName[1,2]
	        STORE "" TO aProgID,aControlName
	
	        IF oReg.EnumOptions(@aKeys,cOptPath+"\"+aCLSIDs[m.i],"",.T.) = 0
	           nPos = ASCAN(aKeys,"Control")
	           IF m.nPos = 0
	              LOOP
	           ENDIF
	           IF !EMPTY(aControls[1,2])
	              DIMENSION aControls[ALEN(aControls,1)+1,2]
	           ENDIF
	           oReg.EnumOptions(@aControlName,cOptPath+"\"+aCLSIDs[m.i])
	              oReg.EnumOptions(@aProgID,cOptPath+"\"+aCLSIDs[m.i]+"\ProgID")
	           aControls[ALEN(aControls,1),1] = aControlName[2]
	           aControls[ALEN(aControls,1),2] = aProgID[2]
	        ENDIF
	     ENDFOR
	     WAIT CLEAR
	     DISPLAY MEMORY LIKE aControls
	
	     * To view all the controls, open the debugger and enter aControls in the
	     * Watch window.
	
	Filereg
	-------
	
	This is a subclass of the Registry that has several useful methods for accessing
	file specific information such as path and version. The following example shows
	how to access both the path and version information for Excel:
	
	     oReg = NewObject("FileReg",HOME()+"FFC\REGISTRY")
	     STORE "" TO cExtKey,cAppKey
	     IF oReg.GetAppPath("XLS",@cExtKey,@cAppKey) = 0
	        ? cExtKey   && ex. Excel.Sheet.8
	        ? cAppKey   && ex. "C:\Office\excel.exe" /e
	     ENDIF
	
	Foxreg
	------
	
	This is a subclass of the Registry and has methods that read/write to the Visual
	FoxPro options registry keys. These settings are saved from the Options dialog
	available off of the Tools menu. While most of these settings are simply mapped
	to SET commands, a few are only stored in the Registry (Maximum Form Design
	Area). The following code snippet returns the current BuilderLock setting (1 is
	Locked & 0 is not Locked):
	
	     oReg = NewObject("FoxReg",HOME()+"FFC\REGISTRY")
	     cOptionValue = ""
	     cOptionName = "BuilderLock"
	     IF oReg.GetFoxOption(m.cOptionName,@cOptionValue)=0
	        ? cOptionValue
	     ENDIF
	
	Odbcreg
	-------
	
	This subclass of the Registry has functions to access ODBC keys for your
	applications that require this information. The following code lists to the
	screen all the ODBC drivers and datasources in your system.
	
	     oReg = NewObject("ODBCReg",HOME()+"FFC\REGISTRY")
	     DIMENSION aODBCDrivers[1]
	     DIMENSION aODBCData[1]
	     nErrNum = oReg.GetODBCDrvrs(@aODBCDrivers)
	     DISPLAY MEMO LIKE aODBCDrivers
	     nErrNum = oReg.GetODBCDrvrs(@aODBCData,.T.)
	     DISPLAY MEMO LIKE aODBCData
	
	Oldinireg
	---------
	
	This subclass of the Registry is included for backward compatibility in accessing
	text files that have old INI formatting.
	
	Assume that you have a copy of an old Win.ini file in your Windows directory.
	
	The following example returns the value of the device entry in the windows
	section of a Win.ini file:
	
	     LOCAL rcValue
	     x=NEWOBJECT("oldinireg",HOME()+"FFC\REGISTRY")
	     x.GetIniEntry(@rcValue,"windows","device","c:\windows\win.ini")
	     IF !empty(rcValue)
	        ?rcValue
	     ELSE
	        ?"Value not found"
	     ENDIF
	
	The following example writes a value to the Run entry in the Windows section of
	the Win.ini file:
	
	     local rcValue
	     rcValue = "test.exe"
	     x=NEWOBJECT("oldinireg",HOME()+"FFC\REGISTRY")
	     x.WriteIniEntry(rcValue,"windows","run","d:\windows\win.ini")
	     x.GetIniEntry(@rcValue,"windows","run","d:\windows\win.ini")
	     ?rcValue
	
	REFERENCES
	==========
	
	For additional information, please see the following Visual FoxPro Solution
	samples for more details:
	
	  Regfile.scx
	  Regfox.scx
	  RegODBC.scx
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbFFC kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP600
	Version           : WINDOWS:2.5,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

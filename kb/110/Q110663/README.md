---
layout: page
title: "Q110663: INFO: Getting/Setting the Default Printer from Windows"
permalink: /kb/110/Q110663/
---

## Q110663: INFO: Getting/Setting the Default Printer from Windows

	Article: Q110663
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbOSWin310 _IK kbSDKWin16
	Last Modified: 09-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "device=" entry in the [windows] section of WIN.ini refers to the default
	printer. The way to change it is to call WriteProfileString("windows", "device",
	szNewPrinterSpec), where szNewPrinterSpec is of the form "printer name, printer
	driver base filename, port connected to printer". For example:
	
	  HP LaserJet IIISi,HPPCL5MS,LPT1:
	
	MORE INFORMATION
	================
	
	The currently installed printers are contained in the WIN.INI [devices] section.
	It is possible to build a list of the installed printers by calling
	GetProfileString("devices", NULL, "", szDriverNames, sizeof(szDriverNames)).
	This will fill the szDriverNames with the names of all printers installed
	separated by a null byte, with a double null byte at the end of the list.
	
	Choose the new printer from the list provided and call
	GetProfileString("devices", szDriverRequested, "", szPrinter, sizeof(szPrinter))
	with szDriverRequested set to the printer name requested. Once the call returns,
	the szPrinter will contain the rest of the information needed to create the
	szNewPrinterSpec. Create a new szPrinterSpec from both szPrinterRequested and
	szPrinter and make the call.
	
	Once WIN.ini is updated, call SendMessage(HWND_BROADCAST, WM_WININICHANGE, 0, 0L)
	to send the correct notification to all top level windows after WIN.INI gets
	changed programmatically. Applications that care about WIN.INI listen for this
	message and reread WIN.ini as needed.
	
	The following code gets and sets the default printer:
	
	     #include <windows.h>
	     #include <string.h>
	
	     #define MAXSTRING 255
	
	     int PASCAL WinMain(HINSTANCE hInst, HINSTANCE hPrevInst,
	                        LPSTR lpszCmdLine, int CmdShow)
	     {
	        char szFmtStr  [] = "%s,%s";
	        char szDevice  [] = "device";
	        char szDevices [] = "devices";
	        char szWindows [] = "windows";
	        char szDefault [] = "default";
	        char szInstPrn [] = "Set this installed printer as default?";
	        char szDefPrn  [] = "The default printer";
	        char szBuff    [MAXSTRING];
	        char szRetBuff [MAXSTRING];
	        char szVal     [MAXSTRING];
	        int nBytes;
	        HLOCAL hLocal;
	        PSTR pszBuf, pszKey;
	
	        nBytes = GetProfileString(szWindows, szDevice, szDefault, szRetBuff,
	                                  sizeof(szRetBuff));
	
	        MessageBox(NULL,szRetBuff, szDefPrn, MB_OK | MB_ICONINFORMATION);
	
	        hLocal = LocalAlloc(LHND, 1024);
	        pszBuf = (PSTR) LocalLock(hLocal);
	
	        GetProfileString(szDevices, NULL, szDefault, pszBuf, 1024);
	
	        for (pszKey = pszBuf; *pszKey != '\0'; pszKey += strlen(pszKey) + 1)
	        {
	           int nID;
	
	           GetProfileString(szDevices, pszKey, szDefault,
	                            szVal, sizeof(szVal));
	           wsprintf(szBuff, szFmtStr, (LPSTR) pszKey, (LPSTR) szVal);
	           nID = MessageBox(NULL, szBuff, szInstPrn, MB_YESNOCANCEL
	                           | MB_ICONQUESTION);
	           switch(nID)
	           {
	              case IDNO:
	                 continue;
	
	              case IDYES:
	                 WriteProfileString(szWindows, szDevice, szBuff);
	                 WriteProfileString(NULL, NULL, NULL);
	                 SendMessage(HWND_BROADCAST, WM_WININICHANGE, 0, 0L);
	
	              default:
	                 break;
	
	           }
	           break;
	        }
	        LocalUnlock(hLocal);
	        LocalFree(hLocal);
	        return(0);
	
	     }
	
	Additional query words: devices 3.00 3.10 3.50
	
	======================================================================
	Keywords          : kb16bitonly kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

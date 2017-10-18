---
layout: page
title: "Q157629: HOWTO: Change the Default Source of Printer Programmatically"
permalink: kb/157/Q157629/
---

## Q157629: HOWTO: Change the Default Source of Printer Programmatically

	Article: Q157629
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To set the default source (upper/lower tray) of a printer programmatically under
	Windows 95 and Windows NT 4.0, use the SetPrinter() Win32 API function.
	
	Note that the SetPrinter() API call is platform-dependent and works only on
	Windows 95 and Windows NT 4.0. (It does not work on earlier versions of Windows
	NT or on a 16-bit platform.)
	
	MORE INFORMATION
	================
	
	To set or change the default source of a printer under Windows 95 and Windows NT
	4.0, call the following:
	
	  
	
	     SetPrinter(HANDLE hPrinter, DWORD dwLevel, LPBYTE lpbPrinter, DWORD
	  dwCommand)
	
	Obtain the hPrinter parameter from OpenPrinter() as a handle that identifies the
	desired printer. Set the dwLevel parameter to 2, and point lpbPrinter to the
	PRINTER_INFO_2 structure. Set the dwCommand parameter to 0. Fill out the
	PRINTER_INFO_2 structure appropriately.
	
	There are few ways of changing the (upper/lower) printer tray dynamically. The
	most common is to use PostScript Laser (PCL) printer commands. To do this,
	insert the escape sequence in the file, along with the content you are trying to
	print. Unfortunately, this method makes it difficult to work with Visual FoxPro
	since you are limited by the printer's settings (you need to know the designated
	printer beforehand), and the reports in Visual FoxPro use the printer driver
	internally once the printing job is established.
	
	The following sample program illustrates the contents of the .dll file written in
	Microsoft Visual C++ 4.0. It shows a way to retrieve a handle identifying the
	specified printer or print server.
	
	NOTE: This sample program illustrates many Microsoft Visual C++ commands. The use
	of these commands is beyond the scope of Microsoft FoxPro Product Support. Some
	of the code used in this article must be compiled with Microsoft Visual C++.
	Users with substantial experience using API routines should be able to write the
	following sample .dll file. For this sample to work, you need a .def file to
	export the chgbin function.
	
	Sample Program (DLL to Change the Default Source of Printer)
	------------------------------------------------------------
	
	     #include "stdio.h"
	     #include <windows.h>
	
	     BOOL APIENTRY DllMain(HANDLE hInst, DWORD ul_reason_being_called, LPVOID
	     lpReserved)
	     {
	          return 1;
	          UNREFERENCED_PARAMETER(hInst);
	          UNREFERENCED_PARAMETER(ul_reason_being_called);
	          UNREFERENCED_PARAMETER(lpReserved);
	     }
	
	     #define ErrReturn   if (GetLastError()) {ClosePrinter(hPrinter);
	     printf("error"); return -1;}
	
	     short FindID(LPPRINTER_INFO_2 pPrinter, int flg);
	
	     BOOL MyFreeMem(LPVOID pMem)
	     {
	        return VirtualFree(pMem, 0, MEM_RELEASE);
	     }
	
	     #define UPPER_BIN 1
	     #define LOWER_BIN 2
	
	     int APIENTRY chgbin(char *ptrname, int flg)
	     {
	        HANDLE   hPrinter = NULL;
	        DWORD    cbBuf;
	        DWORD    pcbNeeded = 0;
	        LPTSTR   pPrintername;
	        short    nSource;
	
	        pPrintername = ptrname;
	
	        PRINTER_DEFAULTS pd;
	        ZeroMemory(&pd, sizeof(pd));
	        pd.DesiredAccess = PRINTER_ALL_ACCESS;
	
	        int result1 = OpenPrinter(pPrintername,&hPrinter, &pd);
	        ErrReturn;
	        int result = GetPrinter(hPrinter, 2, NULL, 0, &pcbNeeded);
	        DWORD Error = GetLastError( );
	
	         if( Error == ERROR_INSUFFICIENT_BUFFER )
	         {
	        BOOL  bRet = FALSE;
	                     HANDLE  hMem = NULL;
	        LPPRINTER_INFO_2  pPrinter;
	
	             hMem = GlobalAlloc(GHND, pcbNeeded);
	             if (hMem) pPrinter = (LPPRINTER_INFO_2)GlobalLock(hMem);
	             cbBuf = pcbNeeded;
	        DWORD cbNeeded;
	        if (GetPrinter(hPrinter, 2, (LPBYTE)pPrinter, pcbNeeded, &cbNeeded))
	        {
	           if ((nSource = FindID(pPrinter,flg)) < 0) return -1;
	
	           pPrinter->pDevMode->dmDefaultSource = nSource;
	           pPrinter->pDevMode->dmFields = DM_DEFAULTSOURCE;
	
	           DocumentProperties(NULL,hPrinter,pPrintername,pPrinter-
	     >pDevMode,pPrinter->pDevMode,
	                 DM_IN_BUFFER|DM_OUT_BUFFER);
	           SetPrinter(hPrinter,2,(unsigned char *)pPrinter,0);
	
	           MyFreeMem(pPrinter);
	           ClosePrinter(hPrinter);
	        }
	         }
	
	         Error = GetLastError( );
	         return 0;
	     }
	
	     typedef struct _tagDevCaps
	     {
	        TCHAR    pPrinterName[80];
	        TCHAR    pPort[80];
	        WORD  wCurCap;
	        WORD    wCurPlatForm;
	        HINSTANCE hDriver;   //only used if on Win32s;
	        DWORD  (CALLBACK* pfnDevCaps) (
	           LPTSTR    pDevice,   // address of device-name string
	           LPTSTR    pPort,  // address of port-name string
	           UINT      fwCapability, // device capability to query
	           LPTSTR    pOutput,   // address of the output
	           LPDEVMODE pDevMode   // address of structure with device data
	        );
	     } DEVCAPS;
	
	     LPVOID MyAllocMem(DWORD cb)
	     {
	        return VirtualAlloc(NULL, cb, MEM_RESERVE|MEM_COMMIT,
	                            PAGE_READWRITE);
	     }
	
	     #define MAX_AMOUNT      256
	     #define MAX_BINS   16
	
	     short FindID(LPPRINTER_INFO_2 pPrinter, int flg)
	     {
	        DEVCAPS MyDevCaps;
	        MyDevCaps.hDriver = NULL;
	        MyDevCaps.pfnDevCaps = NULL;
	        BOOL bRet = FALSE;
	
	        lstrcpy(MyDevCaps.pPrinterName,  pPrinter->pPrinterName);
	        lstrcpy(MyDevCaps.pPort,  pPrinter->pPortName);
	        MyDevCaps.pfnDevCaps = (LPFNDEVCAPS)&DeviceCapabilities;
	
	        DWORD       dwBufSize = 0;
	        BOOL        bResult = 1;
	        WORD FAR    *pawBinList;
	
	        if (MyDevCaps.pfnDevCaps)
	        {
	            // get number of bins
	            dwBufSize = MyDevCaps.pfnDevCaps ((LPTSTR
	     )MyDevCaps.pPrinterName,
	     (LPTSTR )MyDevCaps.pPort, (WORD)DC_BINS,
	                                        (LPTSTR )NULL, (LPDEVMODE)NULL);
	
	            pawBinList = (WORD FAR *)MyAllocMem(dwBufSize* (sizeof(WORD)));
	
	            // fill buffer with bin list
	            MyDevCaps.pfnDevCaps ((LPTSTR )MyDevCaps.pPrinterName, (LPTSTR
	     )MyDevCaps.pPort, (WORD)DC_BINS,
	                            (LPTSTR )pawBinList, (LPDEVMODE)NULL);
	
	            // display bin info
	            // protects from bad drivers
	
	             if ((dwBufSize > 0) && (dwBufSize < MAX_AMOUNT))
	             {
	           for (int i=0; i< (int)dwBufSize;i++)
	           {
	                if (pawBinList[i] < MAX_AMOUNT)
	                {
	                         if (pawBinList[i] < MAX_BINS)
	               {
	                      if (flg == UPPER_BIN && pawBinList[i] == UPPER_BIN)
	                 return (pawBinList[i]);
	                   else if (flg == LOWER_BIN && pawBinList[i] == LOWER_BIN)
	                 return (pawBinList[i]);
	               }
	                }
	           }
	             }
	            // clean up
	            MyFreeMem(pawBinList);
	
	            return (-1);
	        }
	        return (-1);
	     }
	
	In the FoxPro Application
	-------------------------
	
	     DECLARE integer chgbin IN c:\bin.DLL STRING, INTEGER
	
	     ** 1 = Upper   2 = Lower
	     retval = chgbin("HP LaserJet 4Si MX",2)
	
	     USE CUSTOMER
	     LIST TO PRINT
	
	Sample Program (Notes)
	----------------------
	
	- To create a .dll file in Visual C++, please refer to Help in Microsoft Visual
	  C++ 4.0.
	
	- The Chgbin.dll should be in the same directory as your project, or should be
	  in the path of the Windows Win32 directory.
	
	WARNING: Any use by you of the code provided in this article is at your own risk.
	Microsoft provides this code "as is" without warranty of any kind, either
	expressed or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	The function chgbin takes two parameters. The first parameter takes the actual
	printer name. You could get the printer name from FoxPro by using the APRINTER()
	function, which retrieves all the existing drivers in the current windows
	operating system. The second parameter is a flag that tells the chgbin function
	how to set the upper/lower tray. The numeric value 1 indicates that the upper
	tray should be used, and the numeric value 2 indicates that the lower tray is
	being used.
	
	This DLL does not work properly if the printer is a network printer. The network
	printer cannot be configured programmatically since multiple users need to
	access the printer at the same time. In order to solve this problem, you need to
	add a local printer driver and force the local driver to print to a file (where
	the file is redirected to network printer address). In this way, the printer
	driver can have its own settings, which can be used by a FoxPro application to
	refer to the network printer.
	
	It is highly recommended to change the setting back to its default (or previous
	setting) once the program is terminated since other applications might use the
	same driver.
	
	Visual FoxPro stores the printer and bin to use inside the .frx file for reports.
	So changing the paper source for the Printer Driver in Windows does not cause
	the Report to print to a different paper source.
	
	REFERENCES
	==========
	
	For more information about Changing the default printer source, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q133163 HOWTO: Control Printer Attributes for a Report at Run Time
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

---
layout: page
title: "Q75738: Dynaccel.exe Creates Accelerator Tables Dynamically"
permalink: /kb/075/Q75738/
---

## Q75738: Dynaccel.exe Creates Accelerator Tables Dynamically

	Article: Q75738
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbcode kbfile kbsample kbKeyAccel kbGrpDSUser kbOSWin310 kbOSWin300 kb16bitonly kbAccel
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dynaccel.exe demonstrates how to create an accelerator table at run time rather
	than in the resource file. Sometimes you may want to allow users to define
	accelerator keys when they are running an application. No Windows function
	provides this functionality, nor does the typical method of using the Resource
	Compiler (RC) and embedding the accelerator table in the .exe file. To
	accomplish this, the programmer must create and manage an accelerator table.
	This article outlines one method of creating accelerator tables at run time or
	"on the fly."
	
	MORE INFORMATION
	================
	
	Dynaccel.exe demonstrates how to create an accelerator table at run time rather
	than in the resource file. It creates a table of accelerator keys and their
	associated command identifiers. It implements a CustomTranslateAccelerator
	function, which is used in place of Windows' TranslateAccelerator function. It
	traps any WM_KEYDOWN messages, checks the table to see if the key matches an
	accelerator key, checks to see if the CTRL or SHIFT key is down as appropriate,
	and generates a WM_COMMAND message if all conditions are met.
	
	Dynaccel can be enhanced to use a dynamically sized or updated table or to
	include other desired functionality because everything is created and maintained
	within the program.
	
	Dynaccel.exe uses the following code fragments to implement an accelerator table
	at run time. The complete DYNACCEL sample can be found at the Microsoft Download
	Center.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Dynaccel.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Sample Code
	-----------
	
	    /*
	      * Accelerator table data structure. This has been set up arbitrarily
	      * and may be altered depending on the desired functionality.
	      */ 
	
	     typedef struct {
	         BYTE cChar;
	         BYTE cVirtKey;
	         WORD wID;
	     } Accelerator;
	
	     /*
	      * Array of accelerator keys. For demonstration purposes, these values
	      * are predefined by DYNACCEL. An application could read in the
	      * user's keystrokes and assign these values at run time or from an
	      * INI file.
	      */ 
	
	     Accelerator AccTable[TABLELENGTH] =   {
	                     {'A', VKCTRL, IDDA},        //CTRL+key will activate
	                     {'B', VKCTRL, IDDB},        //    "     "      "
	                     {'C', VKCTRL, IDDC},        //    "     "      "
	                     {'D', VKSHFT, IDDD},        //SHIFT+key will activate
	                     {'E', VKSHFT, IDDE},        //    "     "      "
	                     {'F', VKSHFT, IDDF},        //    "     "      "
	                     {' ', 0, IDD_UNDEFINED},    //not defined
	                     {' ', 0, IDD_UNDEFINED}
	                                           };
	
	     /*
	      * FUNCTION: CustomTranslateAccelerator(HWND, LPMSG)
	      *
	      * PURPOSE: Custom TranslateAccelerator for dynamic accelerator
	      *          tables.
	      */ 
	
	     int CustomTranslateAccelerator(HWND hWnd,
	                                    LPMSG lpMsg)
	     {
	     int i;
	
	     if (lpMsg->message == WM_KEYDOWN)
	        for (i = 0; i < TABLELENGTH; i++)  //check table for a match
	           {
	           if ((lpMsg->wParam == AccTable[i].cChar)   //key is in table
	                && (AccTable[i].wID != IDD_UNDEFINED))  //and is defined
	
	              switch (AccTable[i].cVirtKey)
	                 {
	                 case VKCTRL:  //is CONTROL down?
	                    if (GetKeyState(VK_CONTROL) & 0x1000)
	                       return ActivateMenuItem(hWnd, AccTable[i].wID);
	                    break;
	
	                 case VKSHFT:  //is SHIFT down?
	                    if (GetKeyState(VK_SHIFT) & 0x1000)
	                       return ActivateMenuItem(hWnd, AccTable[i].wID);
	                    break;
	                 } //end switch
	           } //end for loop
	
	        return FALSE;    //key combination not found in accelerator table
	     }
	
	     /*
	      * FUNCTION: ActivateMenuItem(HWND, WORD)
	      *
	      * PURPOSE: Highlight (HILITE) a top level menu item, run the command
	      *          associated with a menu item, and unhighlight (UNHILITE)
	      *          the top-level menu item.
	      */ 
	
	     BOOL ActivateMenuItem(HWND hWnd,
	                           WORD wID)
	     {
	     HiliteMenuItem(hWnd, GetMenu(hWnd), wID, MF_BYCOMMAND | MF_HILITE);
	     SendMessage(hWnd, WM_COMMAND, wID, 0L);
	     HiliteMenuItem(hWnd, GetMenu(hWnd), wID, MF_BYCOMMAND | MF_UNHILITE);
	     return TRUE;  //key combination found and processed
	     }
	
	     /*
	      * Implementation of CustomTranslateAccelerator within WinMain
	      */ 
	
	         while (GetMessage(&msg, NULL, NULL, NULL))
	             {
	             if (CustomTranslateAccelerator(hwnd, (LPMSG)&msg) == 0)
	                 {
	                 TranslateMessage(&msg);
	                 DispatchMessage(&msg);
	                 }
	             }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbfile kbsample kbKeyAccel kbGrpDSUser kbOSWin310 kbOSWin300 kb16bitonly kbAcceleratorKey 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

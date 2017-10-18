---
layout: page
title: "Q75339: HOWTO: Steps to Send a Document to a Printer"
permalink: kb/075/Q75339/
---

## Q75339: HOWTO: Steps to Send a Document to a Printer

	Article: Q75339
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If code simplicity is more desirable than printing efficiency, an application
	can implement printing with almost no additional code. For this discussion, the
	application defines a DrawStuff procedure that renders text and/or graphics into
	a specified display context. The application can render the image to the screen
	by getting a screen display context and passing its handle to DrawStuff().
	Printing is more involved; the seven steps required are detailed below.
	
	1. Use GetProfileString() to get the printer driver name and port to print to
	  from the WIN.ini file. Specify "windows" as the application and "device" as
	  the key name.
	
	2. Call the CreateDC() to get a display context for the printer.
	
	The following code demonstrates these two steps:
	
	     // 
	     // HDC GetPrinterDC(void)
	     // 
	     // Return a DC to the currently selected printer.
	     // Returns NULL on error.
	     // 
	
	     HDC GetPrinterDC(void)
	     {
	        static char szPrinter[64];
	               char *szDevice, *szDriver, *szOutput;
	
	     GetProfileString("windows", "device", "", szPrinter, 64);
	
	     if ((szDevice = strtok(szPrinter, "," ))
	             && (szDriver = strtok(NULL, ", "))
	             && (szOutput = strtok(NULL, ", ")))
	          return CreateDC(szDriver, szDevice, szOutput, NULL);
	
	          return NULL;
	     }
	
	1. Use the STARTDOC Escape to start a print job. [In Windows 3.1 and later, call
	  the StartDoc() function rather than the STARTDOC escape.]
	
	     szJobName = "<job name>";
	     Escape(hDC, STARTDOC, lstrlen(szJobName), szJobName, NULL);
	
	     [3.5. In Windows 3.1 and later, call StartPage() to begin a page.]
	
	2. Draw the page by calling DrawStuff(hDC).
	
	3. Use the NEWFRAME Escape to start the next page. [In Windows 3.1 and later,
	  call the EndPage() function rather than the NEWFRAME escape.]
	
	       Escape(hDC, NEWFRAME, 0, 0L, 0L);
	
	  (If more than one page is printed, repeat steps 4 and 5 for each page.)
	
	4. Use the ENDDOC Escape to end the print job. [In Windows 3.1 and later, call
	  the EndDoc() function rather than the ENDDOC escape.]
	
	     Escape(hDC, ENDDOC, 0, 0L, 0L);
	
	5. Call DeleteDC() to free the printer display context.
	
	     DeleteDC(hDC);
	
	Printing requires little extra work if the drawing code is modular. The drawback
	to the approach above is that it can require more memory and printing time than
	may otherwise be necessary. For more information on speeding the printing
	process, query on the following words in the Microsoft Knowledge Base:
	
	  prod(winsdk) and printing and banding
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	

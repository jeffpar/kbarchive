---
layout: page
title: "Q112641: Using ExtDeviceMode() to Modify Printer Settings"
permalink: /kb/112/Q112641/
---

## Q112641: Using ExtDeviceMode() to Modify Printer Settings

	Article: Q112641
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample program EXTDEV2 demonstrates the correct method for calling
	ExtDeviceMode() to change the current printer's orientation to landscape. The
	sample code can easily be modified to change other printer settings such as
	paper size and print quality. This article discusses the steps necessary for
	using ExtDeviceMode() properly and includes the GetPrinterDC() function, which
	is used to change paper orientation in the sample.
	
	EXTDEV2 is based on the PRNTFILE sample from the Windows SDK versions 3.0 and
	3.1. EXTDEV2 also corrects a minor bug in the PRNTFILE sample. For additional
	information about that bug, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q101413 Diagnosing Printing Problems in Your Application
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Extdev2.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Beginning with Windows version 3.0, many printer drivers implement a convention
	for controlling print settings on a job-by-job basis, without requiring user
	intervention via a dialog box. This is accomplished via the ExtDeviceMode()
	function as described in Chapter 17 of the Microsoft Windows SDK "Guide to
	Programming" for both versions 3.0 and 3.1. The DeviceCapabilities() function,
	also introduced in Windows 3.0, provides information about the print settings
	supported by a given driver. As of Windows version 3.1, changes to printer
	settings are allowed on a page-by-page basis via the use of the ResetDC() API.
	
	ExtDeviceMode() and DeviceCapabilities() are supplied by the printer drivers
	rather than GDI. Because not all drivers support these functions, applications
	must ensure that the driver supports these functions before attempting to use
	them.
	
	Because of the Universal Printer Driver (UNIDRV), almost all Windows 3.1 printer
	drivers support these functions. The HP Plotter driver (HPPLOT.DRV) is a notable
	exception. The only way to change the settings on the HP Plotter is to display
	the driver's print setup dialog box, which is accomplished by calling the
	driver's DeviceMode function.
	
	Correct usage of ExtDeviceMode() and DeviceCapabilities() to query and/or modify
	printer settings is a multistep process that is not fully explained in the SDK
	documentation.
	
	Because these functions reside in the printer driver rather than GDI,
	applications must first get a handle to the driver, typically by calling
	LoadLibrary(), and then use GetProcAddress() to get the address of the driver's
	ExtDeviceMode() and/or DeviceCapabilities() functions. If GetProcAddress()
	returns NULL for either of these functions, then that function is not supported
	by the driver.
	
	Furthermore, because ExtDeviceMode() and DeviceCapabilities() are not Windows
	APIs, they are not prototyped in WINDOWS.H. Instead, function pointer types are
	defined for both of these functions in PRINT.H included in the Windows 3.1 SDK
	and in DRIVINIT.H included in the Windows 3.0 SDK. Use LPFNDEVMODE for
	ExtDeviceMode(); use LPFNDEVCAPS for DeviceCapabilities(). Using these types is
	important for compiler type-checking and ensures that the correct arguments are
	passed on the stack. Not using these types (for example, using FARPROC) can lead
	to general protection (GP) faults in some circumstances.
	
	PRINT.H (or DRIVINIT.H) also defines the device-independent part of the DEVMODE
	structure used for manipulating printer settings. Note that the DEVMODE
	structure actually used by a printer driver contains the device-independent part
	followed by a driver-specific part that varies in size and content with each
	driver and driver version.
	
	Because of this driver-dependence, it is very important for applications to query
	the driver for the correct size of the DEVMODE structure before allocating a
	buffer for it.
	
	The following code fragment loads a printer driver, calls ExtDeviceMode() (if
	supported) to get the full DEVMODE size, and allocates a buffer for the full
	DEVMODE structure:
	
	     #include <print.h>            // Formerly DRIVINIT.H in 3.0
	
	     HINSTANCE hDriver;            // Handle to driver
	     LPFNDEVMODE ExtDeviceMode;    // Function pointer variable
	     PDEVMODE pdm;                 // Pointer to DEVMODE struct
	     int nSize;                    // Size of printer's DEVMODE struct
	
	     hDriver = LoadLibrary(szDriver);
	     if (hDriver < HINSTANCE_ERROR)
	
	       return;                     // Error
	
	     ExtDeviceMode = (LPFNDEVMODE) GetProcAddress(hDriver, "EXTDEVICEMODE");
	     if (!ExtDeviceMode)
	
	       {
	       FreeLibrary(hDriver);       // ExtDeviceMode() not supported
	       return;
	       }
	
	     // Get size of DEVMODE
	     nSize = ExtDeviceMode(hWnd, hDriver, NULL, szDevice, szPort,
	                           NULL, NULL, 0);
	
	     // Allocate buffer for DEVMODE
	     pdm = (PDEVMODE) LocalAlloc(LPTR, nSize);  // check for failure!
	
	Often, it is desirable to query the driver for the current printer settings. This
	can be accomplished by allocating a buffer for the DEVMODE structure as above,
	and then calling ExtDeviceMode() a second time, passing the address of the
	output buffer and using the DM_OUT_BUFFER flag (also known as DM_COPY). For
	example:
	
	    ExtDeviceMode(hWnd, hDriver, pdm, szDevice, szPort, NULL, NULL, DM_COPY);
	
	Once the current settings are obtained, applications should use the dmFields
	member of the DEVMODE structure to determine which of the subsequent DEVMODE
	fields were initialized by the driver. Only fields with the corresponding bit
	set in dmFields should be used by the application; other fields are not
	supported by the driver.
	
	To change printer settings, the application should not only change the
	appropriate fields of DEVMODE, but also indicate which fields were changed by
	setting the corresponding bits in dmFields. For example, the following code
	fragment sets landscape printing:
	
	     DWORD dwFields;
	
	     ...
	
	     dwFields = pdm->dmFields;     // Save this
	     pdm->dmFields = 0             // We haven't changed anything yet
	
	     if (dwFields & DM_ORIENTATION)
	
	       {
	       pdm->dmFields |= DM_ORIENTATION;
	       pdm->dmOrientation = DMORIENT_LANDSCAPE;
	       }
	
	     // Continue changing other settings
	
	A driver may support modifying a certain DEVMODE field without supporting all of
	the available settings for that field. For example, an application cannot use
	ExtDeviceMode() to switch to Executive paper if the printer only supports
	Letter, Legal, and A4 paper sizes. Applications should use DeviceCapabilities()
	to query the driver for this type of information. For an example of using
	DeviceCapabilities(), please see the following article in the Microsoft
	Knowledge Base:
	
	  Q81245 DeviceCapabilities() Function Sample Code
	
	
	When the application is done modifying DEVMODE, it is necessary to call
	ExtDeviceMode() again to allow the driver to merge the new settings and to
	update the driver-dependent part of the DEVMODE structure if necessary. This is
	done by providing both an input and an output DEVMODE (a single buffer can be
	used) and by using both the DM_OUT_BUFFER and DM_IN_BUFFER (also known as
	DM_COPY and DM_MODIFY) flags.
	
	     ExtDeviceMode(hWnd, hDriver, pdm, szDevice, szPort,
	
	                   pdm, NULL, DM_IN_BUFFER|DM_OUT_BUFFER);
	
	DEVMODE is now ready for use in CreateDC() or ResetDC() for printing.
	
	Changes made to printer settings in this manner are specific to the particular
	print job. It is also possible to change the system-wide default settings for a
	printer by using DM_OUT_DEFAULT (also known as DM_UPDATE) in addition to
	DM_IN_BUFFER and DM_OUT_BUFFER in the final call to ExtDeviceMode() above.
	However, this is discouraged. It is more appropriate for the user to make
	changes to default settings through the Control Panel.
	
	The following function from the EXTDEV2 sample demonstrates the above method for
	changing the printer orientation to landscape:
	
	Code Sample
	-----------
	
	     #include <windows.h>
	     #include <print.h>    // Formerly DRIVINIT.H in 3.0
	
	  /**************************************************************************
	  **
	     FUNCTION: GetPrinterDC()
	
	      PURPOSE:  Get hDC for default device according to information in the
	                "device" entry in the "windows" section of WIN.INI. Set
	                the device context to landscape orientation if supported.
	
	      COMMENTS: Calls ExtDeviceMode() in printer driver to set the device
	                context to landscape if supported.
	
	                See the documentation for ExtDeviceMode() and the DEVMODE
	                structure for more information.
	
	      RETURNS:  hDC > 0 if success
	                hDC = 0 if failure
	
	  ***************************************************************************
	
	  */ 
	
	     HANDLE GetPrinterDC()
	     {
	
	      char          pPrintInfo[80];
	      LPSTR         lpTemp;
	      LPSTR         lpPrintType;
	      LPSTR         lpPrintDriver;
	      LPSTR         lpPrintPort;
	      char          pmodule[32];
	      HANDLE        hDriver = 0;
	      HANDLE        hDevMode = 0;
	      LPDEVMODE     lpDevMode = NULL;
	      LPFNDEVMODE   lpfnExtDeviceMode;
	      HDC           hDC;
	      int           count;
	
	      // Get the default printer information from WIN.ini.
	      // The string contains the printer name, driver filename, and port.
	      if (!GetProfileString("windows", "Device", (LPSTR)"", pPrintInfo, 80))
	          return (NULL);
	
	      // Parse the string we just got from WIN.INI.
	      // lpPrintDriver will be the driver filename (for example, HPPCL5MS).
	      // lpPrintType will be the printer name (for example, HP Laserjet III).
	      // lpPrintPort will be the port (for example, LPT1:).
	
	      lpTemp = lpPrintType = pPrintInfo;
	      lpPrintDriver = lpPrintPort = 0;
	
	      while (*lpTemp)
	      {
	          if (*lpTemp == ',')
	          {
	              *lpTemp++ = 0;
	              while (*lpTemp == ' ')
	                  lpTemp = AnsiNext(lpTemp);
	              if (!lpPrintDriver)
	                  lpPrintDriver = lpTemp;
	              else
	              {
	                  lpPrintPort = lpTemp;
	                  break;
	              }
	          }
	          else
	              lpTemp = AnsiNext(lpTemp);
	      }
	
	      // Build driver name
	      wsprintf (pmodule, "%s.drv",(LPSTR)lpPrintDriver);
	
	      // Load driver
	      if ((hDriver = LoadLibrary(pmodule)) > 31)
	      {
	          // Get a function pointer to the ExtDeviceMode() function.
	          // ExtDeviceMode() resides in the driver so we can't call it
	          // directly.
	          if (lpfnExtDeviceMode = (LPFNDEVMODE)GetProcAddress(hDriver,
	                                                 (LPSTR)"EXTDEVICEMODE"))
	          {
	             // Get the number of bytes in the full DEVMODE buffer.
	             // This includes the device-dependent part at the end
	             // of the DEVMODE struct.
	             count = lpfnExtDeviceMode(0,
	                                       hDriver,
	                                       NULL,
	                                       lpPrintType,
	                                       lpPrintPort,
	                                       NULL,
	                                       NULL,
	                                       0);    // 0 = get buffer size
	
	             if (count != -1)
	             {
	                 // Allocate storage for the DEVMODE buffer.
	                 hDevMode = GlobalAlloc(GHND, count);
	
	                 if (hDevMode)
	                 {
	                    lpDevMode = (LPDEVMODE)GlobalLock(hDevMode);
	
	                    // Get the current printer settings.
	                    count = lpfnExtDeviceMode(0,
	                                              hDriver,
	                                              lpDevMode,   // Output buffer
	                                              lpPrintType,
	                                              lpPrintPort,
	                                              NULL,
	                                              NULL,
	                                              DM_OUT_BUFFER); // aka DM_COPY
	
	                    // Check to see if this printer supports changing
	                    // the orientation. You should check dmFields
	                    // before changing any printer setting.
	
	                    if (lpDevMode->dmFields & DM_ORIENTATION)
	                    {
	                       // Pass lpDevMode as both the input and output
	                       // DEVMODE buffers. It is important to pass
	                       // in the full DEVMODE from the previous call
	                       // to ExtDeviceMode() as the input buffer because
	                       // it has been completely initialized by the
	                       // driver. If you do not do this, the results
	                       // are sporadic--sometimes it works and sometimes
	                       // it doesn't depending on the printer driver and
	                       // the setting you are trying to change.
	
	                       // Zero out all the fields and then set the bit(s)
	                       // for the field(s) we want to change.
	                       lpDevMode->dmFields = 0;
	                       lpDevMode->dmFields = DM_ORIENTATION;
	
	                       // Change to landscape.
	                       lpDevMode->dmOrientation = DMORIENT_LANDSCAPE;
	
	                       // Call ExtDeviceMode() once more to allow the driver
	                       // to change the device-dependent portion of the
	                       // DEVMODE buffer if it needs to.
	
	                       count = lpfnExtDeviceMode(0,
	                                               hDriver,
	                                               lpDevMode,  //Output buffer
	                                               lpPrintType,
	                                               lpPrintPort,
	                                               lpDevMode,  // Input buffer
	                                               NULL,
	                                               DM_OUT_BUFFER | DM_IN_BUFFER);
	
	                                               // aka DM_COPY | DM_MODIFY
	
	                       hDC = CreateDC(lpPrintDriver,
	                                      lpPrintType,
	                                      lpPrintPort,
	                                      (void FAR*)lpDevMode);
	                    }
	                    else
	                    {
	                       // The printer doesn't support the field you're
	                       // trying to change. Just use the current printer
	                       // settings.
	                       hDC = CreateDC(lpPrintDriver,
	                                      lpPrintType,
	                                      lpPrintPort,
	                                      (void FAR*)lpDevMode);
	                    }
	                    GlobalUnlock(hDevMode);
	                    GlobalFree(hDevMode);
	                    FreeLibrary(hDriver);
	                    return hDC;
	
	                 } // end hDevMode
	             }  // end count != -1
	          } // end lpfnExtDeviceMode != 0
	      } // end hDriver > 31
	
	  // If we got here, an error has occurred so finish cleanup and return NULL.
	
	      if (hDriver)
	         FreeLibrary(hDriver);
	
	      return NULL;
	
	     } // end GetPrinterDC
	
	There are some common variations to the above method when calling
	ExtDeviceMode(). For example, if you just want to create a printer HDC using the
	current printer settings, you only need to call ExtDeviceMode() twice, as
	described above. The first call is to get the size of the full DEVMODE and the
	second call is to get the current printer settings. You then just pass the
	initialized LPDEVMODE to CreateDC.
	
	ExtDeviceMode() can also be used to display the printer driver's setup dialog
	box. Note that this dialog box is driver-specific, and may be slightly different
	than the common dialog box's (COMMDLG.dll) setup dialog box, which is displayed
	by calling the PrintDlg function.
	
	To display the driver's setup dialog box with the current printer settings, you
	only need to call ExtDeviceMode() twice as describe above but with one minor
	change. On the second call to ExtDeviceMode(), use the flags DM_IN_PROMPT |
	DM_OUT_BUFFER (also known as DM_PROMPT | DM_COPY). The DM_IN_PROMPT flag
	displays the dialog box and the DM_OUT_BUFFER flag copies the settings from the
	dialog box into the LPDEVMODE.
	
	You can also display the driver's setup dialog box and change which dialog box
	controls are selected when the dialog box is displayed. For example, if you want
	to display the printer driver's setup dialog box but have the dialog box
	displayed with the landscape control selected, use the above approach with one
	minor change. On the third call to ExtDeviceMode(), specify the flags
	DM_OUT_BUFFER | DM_IN_BUFFER | DM_IN_PROMPT. DM_IN_BUFFER initializes the dialog
	box controls, DM_IN_PROMPT displays the setup dialog box, and DM_OUT_BUFFER
	copies the settings from the dialog box into the LPDEVMODE.
	
	Additional query words: EXTDEV print gpf gp-fault softlib kbfile
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

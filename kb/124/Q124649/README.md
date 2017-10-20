---
layout: page
title: "Q124649: HOWTO: How to Print a Single Line Without Formfeed"
permalink: /kb/124/Q124649/
---

## Q124649: HOWTO: How to Print a Single Line Without Formfeed

{% raw %}

	Article: Q124649
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKWin16
	Last Modified: 09-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to have an application print one line at a
	time without a formfeed. Windows does not inherently provide this ability
	because it is in direct conflict with the design philosophy of a multitasking
	operating system.
	
	One method of single-line printing, including sample code, is provided here. This
	method uses the combination of the raw.drv sample printer driver and the
	PASSTHROUGH escape, and supports printing over a network. It has the following
	limitations:
	
	- This method is not conducive to shared printing. If another application
	  prints, it will assume that the printer is currently at the top of a page,
	  which may not be the case if this code is being used.
	
	- This method is only compatible with dot matrix, daisywheel, or other printers
	  capable of printing a single line or single line feed. It will not work with
	  LaserJet printers that must print a page at a time.
	
	MORE INFORMATION
	================
	
	If you are sure no other application will use the same printer, you can have
	your application print one line at a time to a dot matrix printer without
	issuing a formfeed. Use the raw.drv sample printer driver and the PASSTHROUGH
	escape to accomplish this. Follow these steps:
	
	1. Download raw.drv and place it in the \WINDOWS directory. For additional
	  information about raw.drv, including instructions for download, please see
	  the following article(s) in the Microsoft Knowledge Base:
	
	  Q35708 SAMPLE: Raw.exe Sends Binary Data to Printer w/Device Driver
	
	  Do not install this driver as the default printer driver. It is a sample
	  driver and is not intended to be used for commercial applications.
	
	2. Call the PrintLineNow function by using the following code fragment:
	
	     // The Abort Procedure for printing (a generic AbortProc)
	     // This procedure needs to listed be in the Exports section
	     //    of the .def file
	     BOOL CALLBACK AbortProc( HDC hDC, int Error )
	     {
	       MSG msg;
	
	      while(PeekMessage(&msg, NULL, 0, 0, TRUE))
	      {
	         TranslateMessage(&msg);
	         DispatchMessage(&msg);
	       }
	       return TRUE;
	     }
	
	     // The function that prints one line without formfeed
	     BOOL PrintLineNow( char *pData, WORD cbBytes )
	     {
	       #define   LINEBUFFER_LENGTH 80 //or dynamically alloc enough space
	       HDC       hDC;
	       char      pOutput[LINEBUFFER_LENGTH+sizeof(WORD)];
	       DOCINFO   di;
	       ABORTPROC lpfnAbortProc;
	
	       // Buffer size is LINEBUFFER_LENGTH bytes
	       if( cbBytes > LINEBUFFER_LENGTH )
	          return FALSE;
	
	       // Get the DC using the RAW.DRV driver
	       if( (hDC = CreateDC( "RAW", NULL, "LPT1", NULL ) ) == NULL )
	         return FALSE;
	
	       // Set up an Abort Procedure
	       if((lpfnAbortProc = MakeProcInstance(AbortProc, hInst)) == NULL)
	         {
	           DeleteDC( hDC );
	           return FALSE;
	         }
	       if( SetAbortProc( hDC, lpfnAbortProc ) <= 0 )
	         {
	           DeleteDC( hDC );
	           FreeProcInstance( lpfnAbortProc );
	           return FALSE;
	         }
	
	       // Start a Document
	       di.cbSize = sizeof( DOCINFO );
	       di.lpszDocName = "MyDoc";
	       di.lpszOutput = NULL;
	       if( StartDoc( hDC, &di ) <= 0 )
	         {
	           DeleteDC( hDC );
	           FreeProcInstance( lpfnAbortProc );
	           return FALSE;
	         }
	
	       // The start of a page
	       if( StartPage( hDC ) <= 0 )
	         {
	           DeleteDC( hDC );
	           FreeProcInstance( lpfnAbortProc );
	           return FALSE;
	         }
	
	       // Put data in the buffer and send to the printer
	       *(WORD *)pOutput = cbBytes;
	       memcpy( &(pOutput[sizeof(WORD)]), pData, cbBytes );
	       if( Escape( hDC, PASSTHROUGH, 0, pOutput, NULL ) <= 0 )
	         {
	           DeleteDC( hDC );
	           FreeProcInstance( lpfnAbortProc );
	           return FALSE;
	         }
	
	       // The end of the page
	       if( EndPage( hDC ) < 0 )
	         {
	           DeleteDC( hDC );
	           FreeProcInstance( lpfnAbortProc );
	           return FALSE;
	         }
	
	       // End the Document
	       if( EndDoc( hDC ) < 0 )
	         {
	           DeleteDC( hDC );
	           FreeProcInstance( lpfnAbortProc );
	           return FALSE;
	         }
	
	       // Clean up
	       DeleteDC( hDC );
	       FreeProcInstance( lpfnAbortProc );
	       return TRUE;   // Success
	     }
	
	Additional query words: NEWFRAME FF Mailing Label Form Feed GdiPrn
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

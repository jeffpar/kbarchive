---
layout: page
title: "Q97193: WINCAP Captures Screens Using DIB API"
permalink: /kb/097/Q97193/
---

## Q97193: WINCAP Captures Screens Using DIB API

{% raw %}

	Article: Q97193
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbprint kbSample kbPrinting kbOSWin310 kbDSupport kbSDKWin16 kb16bitonly
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WINCAP demonstrates how to capture, save, and print the entire screen, portions
	of the screen, or specific windows. The program also defines routines that
	accomplish common Device-Independent Bitmap (DIB) functions; these routines form
	the DIB Application Programming Interface (API). WINCAP uses the DIB API
	functions for most of the screen capture, printing, and saving work. See the
	Dibapi.txt file for a description of the DIB API functions.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Wincap.exe
	  (http://download.microsoft.com/download/platformsdk/file90/3.1/W31/EN-US/WINCAP.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	WINCAP illustrates the following techniques::
	
	- Capturing the screen (or a specific window) into a DIB
	
	- Capturing the screen to a device-dependent bitmap (DDB)
	
	- Printing a DIB using banding
	
	- Loading and saving a DIB to a disk file (.bmp file)
	
	- Converting between DIBs and DDBs
	
	- Displaying the captured screen DDB
	
	All of these techniques call the DIB API. WINCAP includes the source code for
	these functions. You can call these functions easily from a different
	application by simply compiling the enclosed Dibapi.dll, and linking with the
	Diapi.lib import library.
	
	The preferred way to capture a screen in Microsoft Windows is to copy the screen
	pixels into a DIB, and then to use this DIB in subsequent operations (for
	example, to save the bitmap to a file or print the bitmap).
	
	If you do not use a DIB in the intermediate step, the results of the screen print
	may be less than desirable. If you use a DIB to hold the screen image,
	device-dependent information is removed from the bitmap. This simplifies the
	process of displaying the image on devices with different display capabilities.
	For example, capturing a screen from a 24-bit display adapter and printing it on
	a 1-bit (monochrome) printer can produce exceptional results if DIBs are used.
	Additionally, many printer drivers implement gray-scale dithering; the output on
	these printers is also excellent when DIBs are used.
	
	NOTE: Because bitmaps are device-dependent, you should avoid the BitBlt function
	when printing bitmaps. The type of bitmaps that the BitBlt function requires are
	normally in the format of the display driver rather than the printer driver.
	Depending on the drivers involved, the results of using BitBlt to print a bitmap
	can vary from extremely poor output quality to no output at all.
	
	Although all printer drivers are able to BitBlt a monochrome bitmap to the
	printer, this technique generally produces poor results because the printer
	cannot apply gray-scaling to the image.
	
	This technique of using a DIB to convert a bitmap between display devices with
	different capabilities can also be used to convert bitmaps while preserving the
	original color information (for example, loading a 256-color bitmap from a .bmp
	file and printing it to a 3-color printer or displaying it on a 24-bit
	display).
	
	The file Dibapi.txt contains more information on function parameters and usage. A
	Windows Help file for the DIB APIs is also included.
	
	Additional query words: printscreen softlib WINCAP
	
	======================================================================
	Keywords          : kbfile kbprint kbSample kbPrinting kbOSWin310 kbDSupport kbSDKWin16 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

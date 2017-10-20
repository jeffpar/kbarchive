---
layout: page
title: "Q66240: INFO: Aligning Columns in a Windows 3.x List Box"
permalink: /kb/066/Q66240/
---

## Q66240: INFO: Aligning Columns in a Windows 3.x List Box

{% raw %}

	Article: Q66240
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbListBox kbSDKPlatform
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To align columns of text in a list box in an application running under Windows
	version 3.0, the suggested approach is to use the proportional system font and
	to use tab characters to align the text. For tabs to work properly, you must
	specify the LBS_USETABSTOPS style when you create the list box.
	
	Code that depends on space characters for correct alignment of text does not work
	correctly with the Windows proportional system font. This is a common problem
	when migrating applications written for Windows 2.x and earlier to Windows 3.0.
	This problem can be corrected by using tabs, or by using a fixed-pitch font in
	the list box.
	
	MORE INFORMATION
	================
	
	One particular fixed-pitch font is always available as a system resource. This
	font, identified as the SYSTEM_FIXED_FONT, is used by applications developed for
	previous versions of Windows that have not been marked for Windows 3.0 font
	compatibility.
	
	To use a fixed font in a dialog box, you must send each control a WM_SETFONT
	message as part of the dialog box's initialization process. The handle to the
	font is passed in wParam for the message. When lParam contains a nonzero value,
	the control redraws itself using the new font. An lParam of zero omits the
	redraw. Below is a small code fragment that demonstrates the processing of the
	WM_INITDIALOG message. ID_CONTROL represents the control ID of the list box (or
	other control).
	
	     HFONT   hFixedFont;
	     ...
	     case WM_INITDIALOG:
	
	         hFixedFont = GetStockObject(SYSTEM_FIXED_FONT);
	         SendDlgItemMessage(hDlg, ID_CONTROL, WM_SETFONT,
	                            hFixedFont, 0L);
	         ... /* possibly other processing */ 
	         break;
	
	The following code fragment selects a fixed font into a device context (DC):
	
	     HFONT   hFixedFont;
	     ...
	     hFixedFont = GetStockObject(SYSTEM_FIXED_FONT);
	     hOldFont   = SelectObject (hDC, hFixedFont);
	     ...
	
	     /* before calling DeleteDC() or ReleaseDC(),
	      * restore original font */ 
	
	     SelectObject(hDC, hOldFont);
	     ...
	
	More information on this and other subjects related to Windows programming is
	contained in the file TIPS.TXT. The SDK installation program places this file in
	the WINDEV directory, with the other SDK files. TIPS.TXT contains a set of notes
	provided by Microsoft Product Support Services to help answer some of the most
	commonly asked questions by developers of Windows 3.0 applications. The notes
	are addressed to new Windows developers as well as to those moving Windows 2.x
	applications to Windows 3.0.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbListBox kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

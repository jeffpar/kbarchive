---
layout: page
title: "Q74601: INFO: Using GetDIBits()"
permalink: /kb/074/Q74601/
---

## Q74601: INFO: Using GetDIBits()

{% raw %}

	Article: Q74601
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbOSWin310 kbDSupport kbOSWin300 kbSDKWin16
	Last Modified: 02-NOV-2001
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	GetDIBits() retrieves the bits of a specified bitmap and copies them, in
	device-independent format, into the buffer that is specified in the lpBits
	parameter. If the lpBits parameter is NULL, GetDIBits fills in the BITMAPINFO
	data structure to which the lpBitsInfo parameter points, but does not retrieve
	bits from the bitmap. The application must ensure that the BITMAPINFO data
	structure passed in the GetDIBits call contains valid data before making the
	GetDIBits call. This article describes how Windows verifies that the data in the
	BITMAPINFO structure is valid.
	
	MORE INFORMATION
	================
	
	When NULL is specified as the lpBits parameter of GetDIBits, the function will
	ensure that the structure passed in to it contains valid data. Then, the
	function sets the biSizeImage field of the BITMAPINFOHEADER structure and the
	bmiColors field of the BITMAPINFO structure.
	
	To validate the BITMAPINFO structure, the following list outlines the checks that
	are made:
	
	     biSize == sizeof(BITMAPINFOHEADER)
	     biHeight: high word is 0
	     biWidth: high word is 0
	     biPlanes == 1
	     biBitCount == 1, 4, 8, or 24
	     biCompression: high word is 0
	     biCompression: low word is 0, BI_RLE8, or BI_RLE4
	     if biCompression == BI_RLE8: biBitCount == 8
	     if biCompression == BI_RLE4: biBitCount == 4
	
	NOTE: For Windows 95 and Windows NT, the following line
	
	     biBitCount == 1, 4, 8, or 24
	
	should be changed to:
	
	     biBitCount == 1, 4, 8, 16, 24, or 32
	
	All these conditions must be true if GetDIBits is to function correctly and
	return valid data (either by setting the biSizeImage field or by returning the
	DIB's bits).
	
	If any of these conditions is not true, the header is invalid, and GetDIBits
	returns 0 (zero).
	
	GetDIBits is performed on the device driver level. Because different devices may
	use different formats to store data, only the device knows its particular
	format. Thus, it is the responsibility of the driver to convert the device
	format to a device-independent format. If the device driver is not completely
	reliable, then GetDIBits may return erroneous information. This should be
	considered when using GetDIBits.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kbOSWin310 kbDSupport kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

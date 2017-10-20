---
layout: page
title: "Q66949: INFO: Windows Metafile Functions &amp; Aldus Placeable Metafiles"
permalink: /kb/066/Q66949/
---

## Q66949: INFO: Windows Metafile Functions &amp; Aldus Placeable Metafiles

{% raw %}

	Article: Q66949
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many Windows-based applications import or export Windows metafiles in a format
	known as the Aldus Placeable Metafile (APM) format. In this format, these
	metafiles cannot be used with the Windows metafile functions such as
	GetMetaFile(), CopyMetaFile(), PlayMetaFile(), and so on. To use these
	metafiles, the APM header must be removed from the metafile and the remaining
	metafile bits must be written to a newly created metafile.
	
	MORE INFORMATION
	================
	
	The APM header is 22 bytes in length and is defined as follows:
	
	     typedef struct
	       {
	       DWORD   key;
	       HANDLE  hmf;
	       RECT    bbox;
	       WORD    inch;
	       DWORD   reserved;
	       WORD    checksum;
	       } APMFILEHEADER;
	
	The following code fragment demonstrates how to create a memory-based Windows
	metafile from an Aldus Placeable Metafile that will work with the metafile
	functions provided by Windows.
	
	The Placeable Windows Metafiles are also documented on pages 26-27 of the
	"Programmer's Reference, Volume 4: Resources" manual from the Windows 3.1 SDK
	documentation.
	
	Sample Code
	-----------
	
	     BOOL RenderAPM (fh)
	     int   fh; // a file handle to the APM metafile is passed in
	     {
	         HANDLE           hData;
	         LPSTR            lpData;
	         DWORD            OffsetToMeta;
	         METAHEADER       mfHeader;
	         APMFILEHEADER    APMHeader;
	
	         OffsetToMeta = sizeof(APMHeader);
	
	     // Seek to beginning of file and read APM header
	         _llseek(fh, 0, 0);
	         if (!_lread(fh, (LPSTR)&APMHeader, sizeof(APMFILEHEADER)))
	             // Error in reading the file
	             return(FALSE);
	
	     // Return to read metafile header
	         _llseek(fh, OffsetToMeta, 0);
	         if (!_lread(fh, (LPSTR)&mfHeader, sizeof(METAHEADER)))
	             // Error in reading
	             return(FALSE);
	
	     // Allocate memory for memory based metafile
	         if (!(hData = GlobalAlloc(GHND, (mfHeader.mtSize * 2L))))
	             return(FALSE);
	     // Were we successful?
	         if (!(lpData = GlobalLock(hData)))
	         {
	             // Error in allocation
	             GlobalFree(hData);
	             return(FALSE);
	         }
	
	     // Read metafile bits
	         _llseek(fh, OffsetToMeta, 0);
	         if (!_lread(fh, lpData, (mfHeader.mtSize * 2L)))
	         {
	             // Error in reading
	             GlobalUnlock(hData);
	             GlobalFree(hData);
	             return(FALSE);
	         }
	
	     // Create the METAFILE with the bits we read in.
	         if (!(hMF = SetMetaFileBits(hData)))
	             return(FALSE);
	
	         GlobalUnlock(hData);
	
	     // Close the APM file
	         _lclose(fh);
	
	     // Return success
	         return(TRUE);
	     }
	
	Additional query words: CloseMetaFile CopyMetaFile CreateMetaFile EnumMetaFile GetMetaFile PlayMetaFile PlayMetaFileRecord SetMetaFileBits SetMetaFileBitsBetter
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}

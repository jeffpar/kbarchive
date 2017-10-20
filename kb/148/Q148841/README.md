---
layout: page
title: "Q148841: Encarta 1996: Update File Download Hangs or Crashes Encarta"
permalink: /kb/148/Q148841/
---

## Q148841: Encarta 1996: Update File Download Hangs or Crashes Encarta

{% raw %}

	Article: Q148841
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you download a Monthly Update file and attempt to start Encarta, the
	program either stops responding (hangs), or the Yearbook Builder no longer
	functions.
	
	CAUSE
	=====
	
	The downloaded file may be corrupted if the integration process fails
	unexpectedly, thus damaging the Yearbook Builder.
	
	RESOLUTION
	==========
	
	Run the Encarta Setup program to remove Encarta. After removing Encarta,
	reinstall it.
	
	Download working copies of all corrupted update files and integrate them with
	Encarta. The integration of the new files replaces the Ybstate.dat file, which
	restores the Yearbook Builder.
	
	NOTE: If you manually delete the Encarta folder, any successfully integrated
	Yearbook (.ybk) files will be deleted from your computer. After the
	reinstallation, you need to copy or download all the update (.eyb) files to the
	Yearbook folder so the Yearbook can be updated.
	
	NOTE: If you downloaded the compressed Encarta (.exe) update files, double-click
	the files to extract the .eyb files. If the .eyb files have been deleted, you
	need to download the updates again.
	
	MORE INFORMATION
	================
	
	To fix a damaged Yearbook Builder, do the following:
	
	1. Run Encarta Setup and select the Remove All option. Remove the program.
	
	2. Run Encarta Setup again, and select the Fast option.
	
	3. Using Explorer, open the Yearbook folder on your hard drive. Any .eyb files
	  remaining in the Yearbook folder may be corrupted.
	
	  NOTE: Successfully integrated .eyb files change to .ybk files.
	
	  To check the integrity of an .eyb file, do the following:
	  a. Select the file.
	
	  b. On the File menu, click Properties.
	
	  c. Examine the exact number of bytes. Compare this to the number of bytes
	     posted with the update file on the Internet or MSN, The Microsoft Network.
	     If the byte count does not match, delete the file from your hard drive.
	
	4. Start Encarta to verify proper program initialization.
	
	5. At the Encarta Home Screen, click Stay Current to open Yearbook Builder, and
	  then click Add New Months.
	
	  If the date is correct and no updates are listed other than August 95 and you
	  have more than one .ybk file in the Yearbook folder, continue to Step 6.
	
	6. Download the update file.
	
	7. Compare file size (see Step 3).
	
	8. Start Encarta.
	
	  The update should correctly integrate. All previous .ybk files integrate and
	  the Yearbook Builder shows the updates you've installed.
	
	Additional query words: 1996 '96 96 multi media multimedia multi- mmtitles kbmm MSN Internet Web WWW hung freeze quits froze dead diedhangs hanging hanged crashed crash crashes frozen locked locked- up lock hang bombed bomb down
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1996
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}

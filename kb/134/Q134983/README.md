---
layout: page
title: "Q134983: Baseball 94: Video Clips Fail with ATI Mach 64"
permalink: /kb/134/Q134983/
---

## Q134983: Baseball 94: Video Clips Fail with ATI Mach 64

{% raw %}

	Article: Q134983
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete Baseball for Windows, version 1994 edition 
	-------------------------------------------------------------------------------
	
	*****************************************************************
	**                          - WARNING -                        **
	**    THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN    **
	**    CONFIRMED, EDITED OR TESTED BY MICROSOFT.  USE ONLY      **
	**    WITH DISCRETION.                                         **
	*****************************************************************
	
	SYMPTOMS
	========
	
	After installing the ATI Mach 64 video card with the ATI Desktop version 1.52
	and FlexDesk version 1.50 drivers, video clip files may display as split video
	images, flicker and appears to be jumpy.
	
	
	CAUSE
	=====
	
	This problem occurs on a computer running Windows 95 if there are incorrect
	entries in the [drivers 32] section of your System.ini file.
	
	In earlier versions of Windows, the incorrect entries are in the [drivers]
	section of your System.ini file.
	
	The ATI Mach 64 installation adds the following entries to the System.ini
	[drivers] section and does not remove or remark the previously installed
	entries:
	
	      VIDC.RT21=Ativacc.drv
	      VIDC.IV32=Ativideo.drv
	      VIDC.RLE=Ativdacc.drv
	      VIDC.DIB=Ativdacc.drv
	      DCI=Atidci
	      ATIVIDEO=Ativideo.drv
	
	Duplicate driver entries appear in the System.ini [drivers] section.
	
	RESOLUTION
	==========
	
	If You Are Running Windows 95
	-----------------------------
	
	Make sure that the following lines exist in the [drivers32] section of your
	System.ini file:
	
	     VIDC.CVID=iccvid.dll
	     VIDC.IV31=ir32_32.dll
	     VIDC.IV32=ir32_32.dll
	     VIDC.MSVC=msvidc32.dll
	     VIDC.MRLE=msrle32.dll
	
	Place a ";" (without the quotes) at the beginning of the line entries that list
	ATI information.
	
	If You Are Running Windows 3.1
	------------------------------
	
	Make sure that the following lines exist in the [drivers] section of your
	System.ini file:
	
	     VIDC.RT21=indeov.drv
	     VIDC.IV31=ir32.dll
	     VIDC.YVU9=indeov.drv
	     VIDC.IV32=ir32.dll
	
	Place a ";" (without the quotes) at the beginning of the line entries that list
	ATI information.
	
	MORE INFORMATION
	================
	
	The products discussed here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: kbhowto multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch kbCompleteBaseballSearch kbCompleteBaseball1994
	Version           : :1994 edition
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q127799: Files Not Deleted, Changes Not Occurring After You Run Setup"
permalink: /kb/127/Q127799/
---

## Q127799: Files Not Deleted, Changes Not Occurring After You Run Setup

{% raw %}

	Article: Q127799
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition,1994-1995 edition,1995 edition
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows versions 1994 edition, 1995 edition 
	- Microsoft Cinemania for Windows 1995 edition 
	- Microsoft Complete Basketball for Windows 1994-1995 edition 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some system files are not removed after the Remove All option has been selected
	from the multimedia Setup program. Some expected changes do not occur when
	selecting Reinstall.
	
	RESOLUTION
	==========
	
	1. Run the program's Setup program.
	
	2. Select the Remove All option and complete the setup removal process.
	
	3. Run the Setup program again, and install the program.
	
	NOTE: Programs that use monthly updates may lose the updates when performing
	these steps.
	
	MORE INFORMATION
	================
	
	1. The Remove All option does not remove the specified entries in the following
	  files:
	
	  System.ini
	  ----------
	
	     [mci]
	     mixer=mcimixer.drv
	     AVIVideo=mciavi.drv
	     MMMovie=mcimmp.drv
	
	     [drivers]
	     mixer=mvmixer.drv
	     wavemapper=msacm.drv
	     MSACM.msadpcm=msadpcm.acm
	     MSACM.msgsm610=msgsm610.acm
	     MSACM.imaadpcm=imaadpcm.acm
	     VIDC.MSVC=msvidc.drv
	     VIDC.RT21=indeo.drv
	     VIDC.CVID=iccvid.drv
	     VIDC.IV31=ir32.dll
	     VIDC.MRLE=msrle.drv
	     VIDC.YVU9=ir21_r.dll
	     VIDC.IV32=ir32.dll
	     IV32=ir32.dll
	     vidc.cram=msvidc.drv
	
	  Win.ini
	  -------
	
	     [mci extensions]
	     avi=AVIVideo
	     mmm=MMMovie
	
	  Windows Folder
	  --------------
	
	     <Mmtitle.ini>
	
	  where <Mmtitle.ini> is the multimedia title's .ini filename, for example
	  Encarta.ini for Encarta.
	
	  NOTES: Please note the following:
	   - Cinemania 1995 does not delete the Cinmania.ini file and Encarta 1995 does
	     not delete the Encarta.ini file.
	
	   - Cinemania 1995 does not reinstall font files.
	
	   - Complete Basketball '94-'95 WILL delete the Bktball.ini file and Bookshelf
	     WILL delete its .ini file.
	
	   - Encarta 96 does not reinstall the fonts provided on the Encarta CD.
	
	  Windows System Folder
	  ---------------------
	
	  No multimedia title system files will be deleted. Many of the compressed
	  Audio, Video for Windows, and OLE system files are shared by other programs.
	  The ACME Setup program cannot determine if other programs will require these
	  files and as a result they are preserved to ensure proper shared component
	  functionality.
	
	2. The Reinstall option only reinstalls the files in the program folder and does
	  not reinstall any files in the Windows folder (usually C:\Windows) or the
	  Windows \System folder. The files in these folders can only be installed
	  during a new installation.
	
	3. The Win.ini and System.ini files entries are created during the initial
	  installation of the multimedia program.
	
	  Win.ini
	  -------
	
	     [mci extensions]
	
	  System.ini
	  ----------
	
	     [mci]
	     [drivers]
	
	Additional query words: 1.0 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          : win31 
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbGamesSearch kbBookshelfSearch kbEncartaEncycSearch kbCineManiaSearch kbCompleteBasketballSearch kbBookShelf1994 kbBookShelf1995 kbCinemania1995 kbCompleteBasketball1994 kbCompleteBasketball1995 kbEncartaEnCyc1996 kbEncartaEnCyc1995Mac
	Version           : :1994 edition,1994-1995 edition,1995 edition
	
	=============================================================================
	

{% endraw %}

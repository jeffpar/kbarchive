---
layout: page
title: "Q162106: Flight Simulator 6.0 Err Msg: Setup Cannot Copy Files"
permalink: /kb/162/Q162106/
---

## Q162106: Flight Simulator 6.0 Err Msg: Setup Cannot Copy Files

{% raw %}

	Article: Q162106
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbhw kbsetup kbHardwarekbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install for Flight Simulator for Windows 95, you may receive
	the following error message:
	
	  Setup cannot copy file <Filename>
	
	where
	
	  <Filename>
	
	is the name of the file that cannot be copied. The first file not copied is
	Micros~1.url. This error message usually occurs after about 20 percent of the
	program has been installed. Setup will continue, and Flight Simulator will be
	able to start and fly OK. However, certain features will not be available
	because of the missing files.
	
	CAUSE
	=====
	
	Flight Simulator for Windows 95 uses long file names. Real-mode CD-ROM drivers
	have a difficult time reading long file names.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the real-mode CD-ROM drivers and replace them with
	Windows 95/98 protected mode CD-ROM drivers.
	
	MORE INFORMATION
	================
	
	Windows protected mode drivers should be available from the CD-ROM drive
	manufacturer. Some protected mode CD-ROM drivers are available in Windows
	95/98.
	
	For help with loading protected mode drivers, see the following article in the
	Microsoft Knowledge Base:
	
	  Q151634 Protected-Mode CD-ROM Drive support in Windows 95
	
	A modified batch file for Setup has been distributed via the Internet and other
	online services. This batch file effectively renames the long file names in the
	Flight Simulator (FS95) Setup so that all the files are correctly copied to the
	hard disk.
	
	WARNING: ANY USE BY YOU OF THE BATCH FILE CODE PROVIDED IN THIS ARTICLE IS AT
	YOUR OWN RISK. Microsoft provides this batch file code "as is" without warranty
	of any kind, either express or implied, including but not limited to the implied
	warranties of merchantability and/or fitness for a particular purpose.
	
	NOTE: This batch file assumes that D is the drive letter of your CD-ROM drive.
	
	Copy and paste the following text into a new file.
	
	@echo off rem "d:" is the drive letter of the Cdrom rem "c:\Program
	Files\Microsoft Games\Flight Simulator" is the FS6 install directory.
	
	COPY d:\fs6\challeng\??????_?.stn "c:\Program Files\Microsoft Games\ Flight
	Simulator\challeng\??????~?.stn"
	
	COPY d:\fs6\panels\?????_?.pix "c:\Program Files\Microsoft Games\Flight
	Simulator\panels\?????-?.pix"
	
	COPY d:\fs6\panels\vor1_?.pix "c:\Program Files\Microsoft Games\Flight
	Simulator\panels\vor1-?.pix"
	
	COPY d:\fs6\panels\vor2_?.pix "c:\Program Files\Microsoft Games\Flight
	Simulator\panels\vor2-?.pix"
	
	COPY d:\fs6\panels\gauges\vor?_?.gau "c:\Program Files\Microsoft Games\Flight
	Simulator\panels\gauges\vor?-?.gau"
	
	COPY d:\fs6\panels\gauges\misc?_?.gau "c:\Program Files\Microsoft Games\Flight
	Simulator\panels\gauges\misc?-?.gau"
	
	COPY d:\fs6\adv\wav\p096_97.wav "c:\Program Files\Microsoft Games\Flight
	Simulator\adv\wav\p096-97.wav"
	
	MKDIR "c:\Program Files\Microsoft Games\Flight Simulator\lessons\videos"
	
	COPY d:\fs6\lessons\videos\???_????.vid "c:\Program Files\Microsoft Games\Flight
	Simulator\lessons\videos\???-????.vid"
	
	COPY d:\fs6\lessons\???_????.les "c:\Program Files\Microsoft Games\Flight
	Simulator\lessons\???-????.les"
	
	COPY d:\fs6\Panels\737_de_1.ndl "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\737_deviation.ndl"
	
	COPY d:\fs6\Panels\737_de_2.ndl "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\737_deviation_ticks.ndl"
	
	COPY d:\fs6\Panels\737_hd_1.ndl "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\737_hdgbug.ndl"
	
	COPY d:\fs6\Panels\737_ob_1.ndl "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\737_obspointer.ndl"
	
	COPY d:\fs6\Panels\adi5_a_1.pix "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\adi5_aspeed.pix"
	
	COPY d:\fs6\Panels\aresti_1.pix "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\aresti1_4.pix"
	
	COPY d:\fs6\Panels\aresti_2.pix "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\aresti2_4.pix"
	
	COPY d:\fs6\Panels\aresti_3.pix "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\aresti3_4.pix"
	
	COPY d:\fs6\Panels\aresti_4.pix "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\aresti4_4.pix"
	
	COPY d:\fs6\Panels\are56c_5.pix "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\aresti5_4.pix"
	
	COPY d:\fs6\Panels\are76c_5.pix "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\aresti6_4.pix"
	
	COPY d:\fs6\Panels\are96c_5.pix "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\aresti7_4.pix"
	
	COPY d:\fs6\Panels\areb6c_5.pix "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\aresti8_4.pix"
	
	COPY d:\fs6\Panels\Gauges\aresti_1.gau "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\Gauges\aresti1_4.gau"
	
	COPY d:\fs6\Panels\Gauges\aresti_2.gau "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\Gauges\aresti2_4.gau"
	
	COPY d:\fs6\Panels\Gauges\aresti_3.gau "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\Gauges\aresti3_4.gau"
	
	COPY d:\fs6\Panels\Gauges\aresti_4.gau "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\Gauges\aresti4_4.gau"
	
	COPY d:\fs6\Panels\Gauges\ar7cb9_5.gau "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\Gauges\aresti5_4.gau"
	
	COPY d:\fs6\Panels\Gauges\ar7eb9_5.gau "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\Gauges\aresti6_4.gau"
	
	COPY d:\fs6\Panels\Gauges\ar70c9_5.gau "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\Gauges\aresti7_4.gau"
	
	COPY d:\fs6\Panels\Gauges\ar72c9_5.gau "c:\Program Files\Microsoft Games\Flight
	Simulator\Panels\Gauges\aresti8_4.gau"
	
	
	Additional query words: flightsim fs6 fs95 d_fltsim real mode protected installation installing setting up error dialog
	
	======================================================================
	Keywords          : kbcode kberrmsg kbhw kbsetup kbHardware kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbFlightSim95 kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

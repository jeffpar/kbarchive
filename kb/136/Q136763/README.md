---
layout: page
title: "Q136763: HOWTO: Play an AVI File w/ an API Call to 16-bit Mmsystem.dll"
permalink: /kb/136/Q136763/
---

## Q136763: HOWTO: Play an AVI File w/ an API Call to 16-bit Mmsystem.dll

{% raw %}

	Article: Q136763
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several ways to play AVI (audio-visual interleave) files from Visual
	FoxPro. These include:
	
	- Placing the AVI file in a General field and then activating it.
	
	- Using a Custom control designed to play MCI (media control interface)
	  devices.
	
	- Calling a Windows API function directly that will play the file for you.
	
	The last technique, although more involved, gives the developer much more control
	over how the AVI file will appear during playback. This article explains how to
	play an AVI file using API functions contained in the Windows 16-bit
	Mmsystem.dll file.
	
	MORE INFORMATION
	================
	
	The API function MCIEXECUTE can be used to access a variety of MCI devices
	including those required to play AVI files. MCIEXECUTE is located in the Windows
	file MMSYSTEM.DLL (typically located in the Windows System directory). Since
	MMSYSTEM is a 16 bit Dynamic Link Library, you must use the REGFN and CALLFN
	statements in FOXTOOLS.FLL to register this function (the DECLARE statement in
	Visual FoxPro can only be used with 32 bit DLL's).
	
	Once the MCIEXECUTE function has been registered, you can use it to send a
	variety of MCI commands to open, play and close an AVI file. The syntax of the
	MCI command string allows you to control many attributes of the AVI playback
	window such as it's size, position, speed and direction (forward or reverse).
	
	The following procedure describes how to create a Form that can be used to play
	an AVI file.
	
	1. Open or switch to Visual FoxPro and open a new Form.
	
	2. Place the following code in the INIT event of the form:
	
	       PUBLIC MCIEXE
	       SET LIBRARY TO FOXTOOLS.FLL
	       MCIEXE = REGFN("MCIExecute" ,"C","I", "MMSYSTEM.DLL") && Registers ;
	       the MCIEXECUTE API function using FOXTOOLS.FLL
	
	3. Create a Command Button on the Form and place the following code in the click
	  event of the button (you can make the Caption of the Button read something
	  like "Play AVI File"):
	
	       cAVIFile = SYS(2004) + "TEST.AVI" && Specifies the path to, and ;
	       the name of the AVI file to be played
	       nRESULT = CALLFN(MCIEXE, "open " + cAVIFile + " TYPE AVIVIDEO alias ;
	       wind style popup") && Opens an instance of the MCI device type;
	       AVIVIDEO and gives it the alias name 'wind'
	       nRESULT = CALLFN(MCIEXE, "play wind wait") && Plays the AVI file ;
	       suspending further MCI command strings until this one is complete
	       nRESULT = CALLFN(MCIEXE,"close wind") && Closes the instance of the ;
	       MCI device driver specified by the alias 'wind'
	
	  NOTE: The above code assumes that the AVI file to be played is called TEST.AVI
	  and is located in the Visual FoxPro directory. You should modify this line
	  appropriately so that the variable AVIFILE will contain a string that
	  contains the complete path and file name of the AVI file to be played. If the
	  MCIEXECUTE is executed successfully, nRESULT will be 1.
	
	4. Save and run the Form. Note that the AVI file will play when you click the
	  Command Button created in step 3 above.
	
	Now that you have successfully played an AVI file from Visual FoxPro, there are a
	number of things you can do to control how the playback window appears. For
	example adding the line:
	
	  nRESULT = CALLFN(MCIEXE, "put wind window at 300 200 164 147")
	
	just prior to the line:
	
	  nRESULT = CALLFN(MCIEXE, "play wind wait")
	
	in the click event of the Command Button allows you to control where the playback
	window will appear, and what it's dimensions will be. In this example the upper
	left hand corner of the window will be at pixel position 300, 200 (where the
	upper left hand corner of the screen is the origin of 0,0) and will have a width
	of 164 pixels and a height of 147 pixels.
	
	Another example that demonstrates modifying the play back window is:
	
	  nRESULT = CALLFN(MCIEXE, "SET WIND SPEED 500")
	
	Adding this line immediately prior to the line:
	
	  nRESULT = CALLFN(MCIEXE, "play wind wait")
	
	in the click event of the Command Button allows you to control the speed at which
	the AVI file will play. In this example it will play a one half of its original
	speed (1 second to 500 milliseconds).
	
	You can also control the direction in which the AVI file will play. Replace the
	code in the Click event of the Command Button with the following to demonstrate
	this ability:
	
	  
	
	       cAVIFile = SYS(2004) + "TEST.AVI" && Specifies the path to, and ;
	       the name of the AVI file to be played
	       nRESULT = CALLFN(MCIEXE, "open " + cAVIFile + " TYPE AVIVIDEO alias ;
	       wind style popup") && Opens an instance of the MCI device type;
	       AVIVIDEO and gives it the alias name 'wind'
	       nRESULT = CALLFN(MCIEXE, "SET wind TIME FORMAT MILLISECONDS") && Sets;
	       the playback format to milliseconds (as opposed to frames)
	       nRESULT = CALLFN(MCIEXE, "PLAY wind WINDOW FROM 5000 TO 0 WAIT") ;
	       && Note that the above line specifies to play the AVI file from time ;
	       position 5000 (milliseconds) to time position 0 (Beginning of the ;
	       file). If your AVI file is less than 5000 milliseconds in length, ;
	       adjust this line accordingly
	       nRESULT = CALLFN(MCIEXE,"close wind") && Closes the instance of the ;
	       MCI device driver specified by the alias 'wind'
	
	There are many other things you can do to control the playback of AVI files using
	MCI Command Strings. For more information on these see Appendix F of the
	Microsoft Video for Windows User's Guide.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

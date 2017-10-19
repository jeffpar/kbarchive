---
layout: page
title: "Q128612: SMS: Visual Basic Application Setup Fails When Executed by PCM"
permalink: /kb/128/Q128612/
---

## Q128612: SMS: Visual Basic Application Setup Fails When Executed by PCM

	Article: Q128612
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Package Command Manager (PCM) for Windows 3.x tries to run a Visual Basic
	Setup Wizard setup program, the setup program prompts for floppy disks, even
	though all the necessary files are located in the package directory along with
	the Setup.exe file.
	
	Running the same command from File Manager works correctly.
	
	This problem also occurs with OMNIWIN.
	
	CAUSE
	=====
	
	The Visual Basic Setup Wizard, Setup.exe, spawns Setup1.exe and then exits. When
	PCM (PCMWIN16) detects the close of Setup.exe, it expects setup is complete, and
	deletes the network connection to the package share. Thus, when Setup1.exe looks
	for necessary files, it cannot find them, and prompts for disks.
	
	NOTE: Setup1.exe is only the default name of the file spawned by Setup.exe.
	Developers are free to name it differently. See Setup.lst for the filename that
	is actually being used.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodsms toolkit sms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

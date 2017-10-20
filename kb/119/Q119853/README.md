---
layout: page
title: "Q119853: INFO: PC Hangs While Running a Communications Application"
permalink: /kb/119/Q119853/
---

## Q119853: INFO: PC Hangs While Running a Communications Application

{% raw %}

	Article: Q119853
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information about a problem that has appeared on recently
	manufactured IBM PCs and PC compatibles. Many of these machines incorporate the
	Peripheral Component Interface (PCI) bus, giving the impression that the problem
	may be somehow related to this bus. The problem, however, can occur on machines
	with other bus architectures. An obvious symptom of this problem is that when a
	comm port is opened and closed a couple of times, the machine hangs, forcing the
	user to reboot the PC.
	
	MORE INFORMATION
	================
	
	There is a problem with a Super I/O chip (SMC '665) that many OEMs used to
	provide serial ports on their latest generation (typically PCI-bus-based) PCs.
	This problem can (and has) shown up on PCs that do not have a PCI bus. Having
	the bad chip is all that is needed to cause this problem.
	
	The problem is that if you reset the first in, first out algorithm (FIFO) by
	clearing and then enabling it when the port is initializing, and there is
	already a character in the receive FIFO, the comm driver gets an indication that
	a new character has been received. The driver, of course, tries to get this
	character. Unfortunately, the driver keeps finding that a new character is
	available even if no more characters have been received. In this case, you can
	do nothing short of a cold reboot to get rid of this indication. Any workaround
	should, therefore, avoid this situation altogether.
	
	A workaround involving a driver is to disable the FIFO, read a character, then
	reenable it. A workaround if you do not have access to a driver is to disable
	the FIFO feature of the 16550 UART. You can accomplish this by editing (adding
	the entry if it does not exist) the COMxFIFO key (x = 1, 2, etc. for COM1, COM2,
	etc.) of the [386Enh] section in the SYSTEM.INI file. For example, the FIFO for
	COM2 can be disabled with the following entry:
	
	  [386Enh]
	  COMXFIFO=0
	
	NOTE: Disabling a comm port's FIFO reduces its data throughput.
	
	The COMM.DRV communications driver shipped with Windows version 3.x and
	SERIAL.386 shipped with Microsoft Windows For Workgroups version 3.11 do not
	offer a workaround for this problem. Users of Windows for Workgroups version
	3.11, however, can download an upgrade to SERIAL.386; this upgrade works around
	the problem. Users of Windows version 3.x have to obtain a third-party
	communications driver that implements a workaround (or explicitly disables the
	FIFO) to solve the problem.
	
	REFERENCES
	==========
	
	
	There is a fix available for this issue from Intel. See the following Web site:
	
	  http://www.intercast.com/support/motherboards/desktop/archive/PremierePCIed/serial.htm
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: 3.00 3.10 WfW 3.11 COM freeze OpenComm CloseComm hung frozen
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

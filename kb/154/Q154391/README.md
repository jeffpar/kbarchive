---
layout: page
title: "Q154391: Flashing Question Mark During Startup"
permalink: /kb/154/Q154391/
---

## Q154391: Flashing Question Mark During Startup

	Article: Q154391
	Product(s): Microsoft Tips for the Macintosh System
	Version(s): 7.x
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Apple Macintosh Operating System 7.x, version 7.x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your Macintosh, a picture of a flashing question mark in a disk
	appears.
	
	CAUSE
	=====
	
	The Macintosh cannot locate a startup disk (it is asking "Where is the startup
	disk?").
	
	WORKAROUND
	==========
	
	To work around this problem, use the following troubleshooting steps.
	
	IMPORTANT: Try these solutions in the order in which they are presented (some
	problems may be fixed by using just one procedure while others may require
	several).
	
	This article assumes that you have Disk Tools/First Aid or disk maintenance
	software.
	
	WARNING: Before using these solutions, remember these procedures may exceed
	normal Microsoft support boundaries. Microsoft is not responsible for the
	performance of the Macintosh operating system. Also, as added protection against
	lost data, please ensure that you have your system disks available and that all
	important files are archived to a backup media.
	
	This may be the cause               Try this troubleshooting method
	-------------------------------------------------------------------
	
	The power or data cable for the     1. Check the power and data cable
	external startup drive is not         connections.
	properly connected.
	
	Start blocks on the startup disk    2. Use Disk Tools/First Aid your disk
	are damaged.                           maintenance software.
	
	The Volume Information Block is     3. Use Disk Tools/First Aid or your
	damaged.                               disk maintenance software.
	
	Parameter RAM is corrupted.         4. Zap the "PRAM."
	
	                                   For information about "Zapping the
	                                   PRAM," please see the following
	                                   article in the Microsoft Knowledge
	                                   Base:
	
	                                   ARTICLE-ID: Q140445
	
	                                   TITLE: "Troubleshooting Power 
	                                          Macintosh
	                                          Type 11 Errors"
	
	The device driver for the disk is   5. Replace the SCSI device driver, and
	damaged.                               use Disk Tools/First Aid or your
	                                      disk maintenance software.
	
	The System or Finder files are      6. Replace damaged system files.
	damaged or missing
	
	
	Additional query words: MACSYS mac m_works
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbHWMAC kbOSMAC kbMSNonProductSearch kbMac7xSearch
	Version           : :7.x
	
	=============================================================================
	

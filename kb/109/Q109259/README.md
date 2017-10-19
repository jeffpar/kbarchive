---
layout: page
title: "Q109259: CONN: MACGATE.INI File Should Not Be Edited Manually"
permalink: /kb/109/Q109259/
---

## Q109259: CONN: MACGATE.INI File Should Not Be Edited Manually

	Article: Q109259
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of the Microsoft Mail Connection for PC and AppleTalk Networks uses
	the MACGATE.INI file to store gateway configuration information. You should NOT
	change this gateway configuration information by manually editing the
	MACGATE.INI file.
	
	To change the gateway configuration options, log on to the Mail for AppleTalk
	Networks gateway server as the Network Manager. From the Mail menu, choose
	Gateway, then select Configuration. Edit the gateway configuration option and
	click the Update button to save the changes to the MACGATE.INI file.
	
	MORE INFORMATION
	================
	
	The MACGATE.INI file contains configuration information that is used by both the
	Macintosh and PC gateway components. Some of this information is read from the
	MACGATE.INI file and stored by the Mail for AppleTalk Networks server in the
	Microsoft Mail Data file when you click the Update button. If you manually edit
	information in the MACGATE.INI file, these changes are not reflected in the Mail
	Data file.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	

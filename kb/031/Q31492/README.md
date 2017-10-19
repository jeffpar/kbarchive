---
layout: page
title: "Q31492: Editing Nonexisting Files with the Microsoft Editor"
permalink: /kb/031/Q31492/
---

## Q31492: Editing Nonexisting Files with the Microsoft Editor

	Article: Q31492
	Product(s): See article
	Version(s): 1.00
	Operating System(s): OS/2
	Keyword(s): ENDUSER | tar62913 | mspl13_basic
	Last Modified: 16-JUN-1988
	
	If the Microsoft Editor is invoked to edit a nonexisting file, it
	creates a file with a length of zero in the DELETED directory in
	addition to creating a new file. This occurs with the backup switch
	set to "undel" (the default) in the TOOLS.INI file.
	   This behavior is expected and is program design for the product.
	When the Microsoft Editor is invoked to edit an existing file, the
	previous version is moved to the DELETED directory.
	   The EXP command allows you to remove this file, and all other files
	from the DELETED directory.

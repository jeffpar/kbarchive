---
layout: page
title: "Q141339: XCLN: Err Msg: Form You Selected Could Not be Displayed"
permalink: kb/141/Q141339/
---

## Q141339: XCLN: Err Msg: Form You Selected Could Not be Displayed

	Article: Q141339
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get the following error message when you try to compose or read a
	Microsoft Exchange Electronic Forms Designer form:
	
	  The form you selected could not be displayed. There is not enough disk space
	  to copy the form to your computer. Close some forms to increase the maximum
	  space for forms using the option command on the tools menu. [80040119]
	
	CAUSE
	=====
	
	The problem can be caused by insufficient temporary storage space allocated for
	the form. The default size permitted is 1024 kilobytes (KB). Therefore,
	electronic forms larger than approximately 1 megabyte (MB), the temporary
	storage size, will have to be increased.
	
	RESOLUTION
	==========
	
	To increase the temporary storage space for forms in the Microsoft Exchange
	client, select Tools, Options, Exchange Server page, and increase the Temporary
	storage for forms field.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	

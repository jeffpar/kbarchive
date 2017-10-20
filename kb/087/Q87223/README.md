---
layout: page
title: "Q87223: FFAPI: Understanding Microsoft Mail File Formats"
permalink: /kb/087/Q87223/
---

## Q87223: FFAPI: Understanding Microsoft Mail File Formats

{% raw %}

	Article: Q87223
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (FFAPI), version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail File Format (MMFF) is an input or output file that contains
	messages formatted especially for Microsoft Mail. These messages are messages
	that have been exported from the Mail data files or are about to be imported
	into the Mail data files.
	
	There are four MMFF types:
	
	- Basic message format
	
	- Extended message format
	
	- Encapsulated message format
	
	- Extended mailbag header format
	
	A complete description of all file formats is in the "Microsoft Mail Software
	Development Kit File Format API for Gateways and Applications" manual. This
	article describes the purpose of each file format.
	
	MORE INFORMATION
	================
	
	Basic Message Format
	--------------------
	
	This format should be used for very basic application interfaces; for example,
	automating reporting procedures to send mail directly from a database
	application. This format does not support CC: fields; when exporting messages
	with a CC: field, CC: addresses will be converted to TO: addresses. Attempting
	to import messages with a CC: will generate errors.
	
	Extended Message Format
	-----------------------
	
	This format allows a developer to access message header date, address, and file
	details. This format is typically used when you want to access information in a
	message file that would otherwise not be available. For example, you can build
	an extended message field that split the time into three components: hours,
	minutes, and seconds. You can also access detailed information about attached
	files, such as name, size, create date, and file type.
	
	Extended Mailbag Header Format
	------------------------------
	
	This format allows you to access individual pieces of mail in a mailbag. By
	enumerating mailbag headers, you can choose which particular item you want to
	extract or delete. You can also manipulate the individual mailbag headers in the
	mailbag file.
	
	For example, your application could read all the unread headers in its mailbag
	and display them in a type of list box. Selecting a particular header would tell
	the application to extract that mail message.
	
	Encapsulated Message Format
	---------------------------
	
	Encapsulated message format should be used when the messages are being routed
	through foreign mail systems, such as X.400 or SMTP. The entire message will be
	encapsulated as an attachment, and transmitted through the foreign system with a
	dummy header.
	
	REFERENCES
	==========
	
	"Microsoft Mail Software Development Kit File Format API for Gateways and
	Applications"
	
	
	Additional query words: 3.00 pcmail ffapi
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailFFAPI300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}

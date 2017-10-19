---
layout: page
title: "Q146304: XADM: Directory Import File Format"
permalink: /kb/146/Q146304/
---

## Q146304: XADM: Directory Import File Format

	Article: Q146304
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Import text files require a specific format. The first line should contain
	the header, followed by lines of data to import. The header defines the contents
	of each field on the data line. The import file can contain an unlimited number
	of data lines. This article describes the required header fields of an import
	file.
	
	MORE INFORMATION
	================
	
	The first field in the header line contains the properties from the schema. The
	schema is a collection of properties for objects in the directory. When you
	create a recipient with directory import, the following fields are required:
	
	Column Heading  Description                    Valid Values
	--------------  -----------------------------  ----------------------
	
	Obj-Class       The type or class of object    Mailbox = mailbox
	               that is being created,         Distribution List = dl
	               deleted or modified. This      Custom Recipient =
	               must be the first field.        remote
	
	Mode            A required field for           Create
	               specifying if the object is    Delete
	               to be created, deleted or      Modify
	               modified. If this field is     Update
	               used, it must be the second
	               field. If this field is not
	               used, then the default is
	               Update. This means that the
	               object will be created if it
	               does not exist and modified
	               if it does exist.
	
	Directory Name  The unique directory name of
	               the object to be created,
	               deleted, or modified.
	
	NOTE: The Home-Server attribute is required for mailbox objects and the e-mail
	address attribute is required for remote objects.
	
	All additional fields in the header are properties of the modified object. By
	default, all fields are separated by commas, and each line ends with a carriage
	return and a line feed. If a field contains a comma, the data must be in double
	quotation marks (").
	
	Some fields are multi-valued. For example, the distribution list object has a
	member property which can have multiple members. In an import file, these
	multiple members are included in the same field, separated by percent (%)
	signs.
	
	The first data line creates a distribution list with distribution lists as
	members. You can also populate a distribution list with members that are not
	created in the directory. If the members are created at a later time, they are
	automatically added to the appropriate distribution list.
	
	Import files are in .CSV or comma-separated format. This format is read by
	database programs, such as Microsoft Access, or spreadsheet programs, such as
	Microsoft Excel. You can use sorting features to minimize the effort of creating
	and editing import files. For more information, see the Microsoft Exchange
	Server Programmer's Guide.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

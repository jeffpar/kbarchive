---
layout: page
title: "Q261283: XGEN: DAPI Error Codes for Exchange Server 5.5 (Part 1 of 2)"
permalink: kb/261/Q261283/
---

## Q261283: XGEN: DAPI Error Codes for Exchange Server 5.5 (Part 1 of 2)

	Article: Q261283
	Product(s): Microsoft Exchange
	Version(s): 2.1,4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Metadirectory Services, version 2.1 
	- Exchange Development Kit (EDK), versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is part one of a two-part article that contains a list of Microsoft
	Directory Application Program Interface (DAPI) error codes. This article is
	designed to help engineers find DAPI error messages that can occur when trying
	to synchronize Exchange Server 5.x directories with DAPI-aware applications such
	as Microsoft Metadirectory Services MAPI Management Agent for Microsoft Exchange
	Server, Linkage Directory Exchange (LDE), or the InterOrg Synchronization tool
	available in the Microsoft BackOffice Resource Kit, Second Edition.
	
	MORE INFORMATION
	================
	
	DAPI Error Codes
	----------------
	
	Error Code: 0xC0000080
	Error Translation: BERR_GENERAL_FAILURE
	Problem: A general failure occurred.
	
	Error Code: 0xC0000081
	Error Translation: DAPI_E_BAD_HANDLE
	Problem: A bad DAPI handle supplied to call.
	
	Error Code: 0xC0000082
	Error Translation: DAPI_E_HEADER_MUST_BE_TEXT
	Problem: Header values must be specified as text strings.
	
	Error Code: 0xC0000083
	Error Translation: PDC_NOT_FOUND
	Problem: Unable to find the primary domain controller for domain %1.
	
	Error Code: 0xC0000084
	Error Translation: PDC_NOT_RESPONDING
	Problem: Primary domain controller %1 is not responding.
	
	Error Code: 0x00000085
	Error Translation: BIMPMSG_PROMPT_LOG_FULL
	Problem: The application event log is full. If you continue, you should increase
	the maximum log size or additional error information may not be written to the
	log. If you cancel, existing operations will not be undone.%n%n
	Do you want to continue with the %1?
	
	Error Code: 0x00000086
	Error Translation: BIMPMSG_PROMPT_LOG_ERROR
	Problem: The following error was encountered when attempting to log an event in
	the application event log: %2 If you continue, additional error information may
	not be written to the log. If you cancel, existing operations will not be
	undone.
	Do you wish to continue with the %1?
	
	Error Code: 0x00000087
	Error Translation: BIMPMSG_PROMPT_LOG_FILE_ERROR
	Problem: An error was encountered when writing to the log file %1. If you
	continue, additional error information will not be written to the log file. If
	you cancel, completed operations will not be undone. %n%n
	Do you want to continue with the %2?
	
	Error Code: 0x80000088
	Error Translation: BWARN_ACCNT_EXISTS
	Problem: A Windows NT account for user %1 already exists.
	
	Error Code: 0x80000089
	Error Translation: BWARN_OVERRIDE_PDC_NOT_FOUND
	Problem: Windows NT account %1 could not be created because the primary domain
	controller (PDC) could not be found for domain %2.
	
	Error Code: 0x8000008A
	Error Translation: BWARN_DELETE_TARGET_DOES_NOT_EXIST
	Problem: Object %1 that was specified for deletion does not exist.
	
	Error Code: 0x8000008B
	Error Translation: BWARN_DELETE_ACCOUNT_NOT_FOUND
	Problem: The Windows NT security account, %1\%2, was not found and could not be
	deleted.
	
	Error Code: 0x8000008C
	Error Translation: BWARN_DELETE_DOMAIN_NOT_FOUND
	Problem: The Windows NT security account, %1\%2, could not be deleted because the
	NT security domain controller could not be found.
	
	Error Code: 0x8000008D
	Error Translation: BWARN_ASSOC_ACCOUNT_NOT_FOUND
	Problem: The Assoc-NT-Account value %2 specified for mailbox %1 could not be
	found.
	
	Error Code: 0x8000008E
	Error Translation: BWARN_NO_OBJ_PERM_ADMIN_ACCOUNT
	Problem: Obj-Perm-Admin value %3 specified for %2 %1 was not found. This user
	could not be granted permissions administrator privileges on the %2.
	
	Error Code: 0x8000008F
	Error Translation: BWARN_NO_OBJ_ADMIN_ACCOUNT
	Problem: Obj-Admin value %3 specified for %2 %1 was not found. This user could
	not be granted administrator privileges on the %2.
	
	Error Code: 0x80000090
	Error Translation: BWARN_NO_OBJ_USER_ACCOUNT
	Problem: Obj-User value %3 specified for %2 %1 was not found. This user will not
	have access to the %2.
	
	Error Code: 0x80000091
	Error Translation: BWARN_NO_DEFAULT_ACCOUNT
	Problem: User access privileges could not be assigned to %2 %1. No user accounts
	were specified, and the default Windows NT account, %3, could not be found.
	
	Error Code: 0x80000092
	Error Translation: BWARN_COULD_NOT_CREATE_SD
	Problem: Microsoft Windows error %2 was encountered while attempting to create a
	Windows NT security descriptor for mailbox object %1.
	
	Error Code: 0x40000093
	Error Translation: DAPI_MISSING_EXCHANGE_CP
	Problem: Missing a code page (20261 or 1252) required for proper character
	translation when reading and writing objects in the directory. Some characters
	may not map properly. Verify that these are installed on your system.
	
	Error Code: 0x40000094
	Error Translation: BWARN_RENAMED_OUTPUT_FILE
	Problem: File %1 already existed and was renamed to %2.
	
	Error Code: 0x80000095
	Error Translation: BWARN_RENAMED_IMPORT_FILE
	Problem: The specified import file, %1, conflicts with a constructed output file
	and was renamed to %2.
	
	Error Code: 0x80000096
	Error Translation: BWARN_DEL_ATTR
	Problem: Entry %1 did not contain property %2 so the property could not be
	deleted.
	
	Error Code: 0x80000097
	Error Translation: BWARN_THREAD_FAILED
	Problem: Microsoft Windows error %1 occurred when attempting to create a
	processing thread.
	
	Error Code: 0x80000098
	Error Translation: BWARN_ATTRIBUTE_DUPLICATE
	Problem: %1 has been specified more than once in the attribute list. Only the
	first instance will be used when writing to the directory.
	
	Error Code: 0x80000099
	Error Translation: BWARN_ATTRIBUTE_READONLY
	Problem: The attribute %1 is read-only. Values specified for this attribute will
	be ignored when writing to the Directory.
	
	Error Code: 0xC000009A
	Error Translation: BWARN_ATTRIBUTE_NOT_IMPORTABLE
	Problem: The attribute %1 is not directly importable.
	
	Error Code: 0x8000009B
	Error Translation: BWARN_NO_RAW_MODE_TEMPLATE
	Problem: Template objects do not apply when in raw mode.
	
	Error Code: 0x8000009C
	Error Translation: BWARN_OVERSIZE_ATT_FILE
	Problem: The attribute value data length exceeded the Microsoft Excel limit of
	255 characters. The data was written to file %1.
	
	Error Code: 0xC000009D
	Error Translation: DAPI_ERR_WRONG_SYNTAX
	Problem: The value type specified for attribute %1 is incorrect.
	
	Error Code: 0xC000009E
	Error Translation: DAPI_E_INVALID_CODEPAGE
	Problem: The specified code page has not been installed on the system.
	
	Error Code: 0xC000009F
	Error Translation: DAPI_E_OBJECT_NOT_FOUND
	Problem: Unable to find object %1.
	
	Error Code: 0xC00000A0
	Error Translation: DAPI_E_NO_OBJECT
	Problem: No object specified.
	
	Error Code: 0xC00000A1
	Error Translation: DAPI_E_CREATE_FILE
	Problem: Unable to create the export file %1. %2
	
	Error Code: 0x800000A2
	Error Translation: DAPI_W_HIER_RECALC_FAILED
	Problem: Unable to recalculate the Address Book hierarchy after performing the %2
	operation on the %1 container.
	
	Error Code: 0x800000A3
	Error Translation: DAPI_W_EXP_FILE_OVERWRITTEN
	Problem: The export file %1 already exists and is being overwritten.
	
	Error Code: 0x800000A4
	Error Translation: DAPI_W_NO_VALUES
	Problem: No values specified for DAPIWrite.
	
	Error Code: 0x800000A5
	Error Translation: DAPI_W_RDN_MAPPED
	Problem: One or more characters specified for the %2 are not valid. The object
	name was changed from %1 to %3.
	
	Error Code: 0x800000A6
	Error Translation: DAPI_W_IMP_VALUE_MAPPED
	Problem: One or more characters specified for the %2 attribute of object %1 are
	not valid. The value was changed from %3 to %4.
	
	Error Code: 0x800000A7
	Error Translation: DAPI_W_EXP_VALUE_MAPPED
	Problem: One or more characters in the %2 attribute of %1 could not be mapped to
	the export code page. The system default character was used.
	
	Error Code: 0x800000A8
	Error Translation: DAPI_W_BACKSLASH_DROPPED
	Problem: One or more backslash characters specified in the %2 attribute of %1
	were mapped out on import. The value was changed from %3 to %4. The backslash
	character may be specified by doubling it (i.e., \\).
	
	Error Code: 0x800000A9
	Error Translation: DAPI_W_STRING_TOO_LONG
	Problem: A value specified for the %2 attribute of object %1 exceeded the limit
	of %3 %4. The string was truncated to fit.
	
	Error Code: 0x800000AA
	Error Translation: DAPI_W_NO_DL_OWNER_ACCOUNT
	Problem: There is no primary Windows NT Account associated with the object
	specified as the owner of distribution list %1.
	
	Error Code: 0x800000AB
	Error Translation: DAPI_W_SERVER_SYNCH_IN_PROGRESS
	Problem: The Microsoft Exchange Directory server, %1, is currently synchronizing
	with other servers in the site. Write operations are not recommended at this
	time.
	
	Error Code: 0xC00000AC
	Error Translation:BERR_SIGNATURE_MISMATCH
	Problem: A version mismatch was detected between DAPI.DLL and the program. %1
	cannot proceed.
	
	Error Code: 0xC00000AD
	Error Translation:BERR_INVALID_BASEPOINT
	Problem: The object name specified for basepoint %1 is not valid.
	
	Error Code: 0xC00000AE
	Error Translation:BERR_NO_SUCH_BASEPOINT
	Problem: The basepoint object %1 does not exist in the directory.
	
	Error Code: 0xC00000AF
	Error Translation:BERR_INVALID_CONTAINER
	Problem: The object name specified for the container %1 is not valid.
	
	Error Code: 0xC00000B0
	Error Translation:BERR_NO_SUCH_CONTAINER
	Problem: The specified container %1 does not exist in the directory.
	
	Error Code: 0xC00000B1
	Error Translation:BERR_DEFAULT_USER_ERROR
	Problem: The object name specified for the create object template %1 is not
	valid.
	
	Error Code: 0xC00000B2
	Error Translation:BERR_NO_WORKSPACE
	Problem: No object management (OM) workspace is available.
	
	Error Code: 0xC00000B3
	Error Translation:BERR_DUA_UNAVAILABLE
	Problem: Unable to initialize directory user agent (DUA) workspace.
	
	Error Code: 0xC00000B4
	Error Translation:BERR_NEGOTIATE_FAILURE
	Problem: Could not negotiate directory user agent (DUA) features. %1
	
	Error Code: 0xC00000B5
	Error Translation:BERR_DSA_BIND_FAILURE
	Problem: Could not bind to the Microsoft Exchange Directory server %2. %1
	
	Error Code: 0xC00000B6
	Error Translation: BERR_DEFAULT_BIND_FAILURE
	Problem: No Microsoft Exchange Directory server is available.
	
	Error Code: 0xC00000B7
	Error Translation: BERR_ILLEGAL_DSANAME
	Problem: The Microsoft Exchange Directory server Name, %1, is illegal.
	
	Error Code: 0xC00000B8
	Error Translation: BERR_SERVER_NOT_WRITABLE
	Problem: The Microsoft Exchange Directory server, %1, is not currently writable.
	Try the operation again later.
	
	Error Code: 0xC00000B9
	Error Translation: BERR_DSA_UNBIND_FAILURE
	Problem: Could not unbind from the directory service. %1
	
	Error Code: 0xC00000BA
	Error Translation: BERR_SCHEMA_LOAD_FAILED
	Problem: An initialization failure occurred. The directory schema could not be
	read from messaging site %1.
	
	Error Code: 0xC00000BB
	Error Translation: BERR_XOM_SCHEMA_READ
	Problem: An initialization failure occurred. Object management (OM) error %1 was
	encountered while attempting to read the schema.
	
	Error Code: 0xC00000BC
	Error Translation: BERR_XDS_SCHEMA_READ
	Problem: An initialization failure occurred while attempting to read the schema.
	%1
	
	Error Code: 0xC00000BD
	Error Translation: BERR_ATTRIBUTES_UNAVAILABLE
	Problem: An initialization failure occurred. Unable to read attributes from the
	schema.
	
	Error Code: 0xC00000BE
	Error Translation: BERR_ATTRIBUTE_PROPERTY_UNAVAILABLE
	Problem: An initialization failure occurred. The attribute-schema object %1 does
	not contain the %2 attribute.
	
	Error Code: 0xC00000BF
	Error Translation: BERR_INIT_ATTR_UNKNOWN
	Problem: Attribute %1 is not defined in the directory schema and so is not
	supported for import.
	
	Error Code: 0xC00000C0
	Error Translation: BERR_UNREC_OBJECT_TYPE
	Problem: An internal error occurred. The directory schema contained an
	unrecognized type value. Attribute %1.
	
	Error Code: 0xC00000C1
	Error Translation: BERR_OBJECT_TYPE_NOT_IMPLEMENTED
	Problem: Attribute %1 cannot be processed because its object type is not yet
	implemented.
	
	Error Code: 0xC00000C2
	Error Translation: BERR_UNREC_ATTR_SYNTAX
	Problem: An internal error occurred. The directory schema contains an
	unrecognized syntax value. Attribute %1.
	
	Error Code: 0xC00000C3
	Error Translation: BERR_ATTR_SYNTAX_NOT_IMPLEMENTED
	Problem: An internal error occurred. Attribute %1 cannot be processed because its
	object management (OM) syntax is not yet implemented.
	
	Error Code: 0xC00000C4
	Error Translation: BERR_VALUE_SYNTAX_NOT_IMPLEMENTED
	Problem: Unable to convert the attribute value to a string because syntax %1 is
	not yet implemented.
	
	Error Code: 0xC00000C5
	Error Translation: BERR_UNREC_VALUE_SYNTAX
	Problem: Unable to convert the attribute value to a string because syntax %1 is
	not recognized.
	
	Error Code: 0xC00000C6
	Error Translation: BERR_VALUE_OBJECT_TYPE_NOT_IMPLEMENTED
	Problem: Unable to convert the attribute value to a string because object type %1
	is not yet implemented.
	
	Error Code: 0xC00000C7
	Error Translation: BERR_UNREC_VALUE_OBJECT_TYPE
	Problem: Unable to convert the attribute value to a string because the object
	type is not recognized.
	
	Error Code: 0xC00000C8
	Error Translation: BERR_INIT_CLASS_UNKNOWN
	Problem: Unable to initialize because class ID %1 was not found in the
	descriptors read from the schema.
	
	Error Code: 0xC00000C9
	Error Translation: BERR_CLASSES_UNAVAILABLE
	Problem: Unable to initialize because the object class descriptions could not be
	read from the schema.
	
	Error Code: 0xC00000CA
	Error Translation: BERR_CLASS_PROPERTY_UNAVAILABLE
	Problem: Unable to initialize because the class schema object %1 does not contain
	the %2 attribute.
	
	Error Code: 0xC00000CB
	Error Translation: BERR_CLASS_ATTRIBUTE_MISSING
	Problem: Unable to initialize because at least one of the schema attributes
	specified in the %2 attribute of the class schema object %1 is not defined.
	
	Error Code: 0xC00000CC
	Error Translation: BERR_NO_IMPORT_FILE
	Problem: There is no file specified for directory import.
	
	Error Code: 0xC00000CD
	Error Translation: BERR_NO_EXPORT_FILE
	Problem: There is no file specified for the export operation.
	
	Error Code: 0xC00000CE
	Error Translation: BERR_INVALID_IMPORT_FILE
	Problem: Unable to open import file %1. %2
	
	Error Code: 0xC00000CF
	Error Translation: BERR_INVALID_EXPORT_FILE
	Problem: Unable to export to file %1. %2
	
	Error Code: 0xC00000D0
	Error Translation: BERR_FILE_IS_UNICODE
	Problem: The specified file is Unicode. Code page override is not valid.
	
	Error Code: 0xC00000D1
	Error Translation: BERR_FILE_IS_NOT_UNICODE
	Problem: The specified file is not Unicode.
	
	Error Code: 0xC00000D2
	Error Translation: BERR_INVALID_FILENAME
	Problem: The filename %1 is not valid.
	
	Error Code: 0xC00000D3
	Error Translation: BERR_CANT_RENAME_IMP_FILE
	Problem: The specified import file %1 conflicts with a constructed output
	filename, but could not be renamed for import.
	
	Error Code: 0xC00000D4
	Error Translation: BERR_CANT_RENAME_EXPORT_FILE
	Problem: The export file %1 could not be accessed. The file may be opened by
	another application or the path may not be valid.
	
	Error Code: 0xC00000D5
	Error Translation: BERR_FILE_IS_DIRECTORY
	Problem: The specified file %1 names a directory. #define BERR_FILE_IS_DIRECTORY
	0xC00000D5L
	
	Error Code: 0xC00000D6
	Error Translation: BERR_FILE_IS_READONLY
	Problem: Unable to create output file %1. The file exists and is read only.
	
	Error Code: 0xC00000D7
	Error Translation: BERR_CREATE_LOG_FAILED
	Problem: Unable to create the directory import error log file %1.
	
	Error Code: 0xC00000D8
	Error Translation: BERR_CREATE_PSW_FAILED
	Problem: Unable to create the directory import password file %1.
	
	Error Code: 0xC00000D9
	Error Translation: BERR_WRITE_PSW_ERROR
	Problem: The system reported the following error while attempting to write to the
	created account file %1. %n%2
	
	Error Code: 0xC00000DA
	Error Translation: BERR_MISSING_OBJ_CLASS
	Problem: The Obj-Class value must be specified on each import line.
	
	Error Code: 0xC00000DB
	Error Translation: BERR_RDN_MISSING
	Problem: The %1 attribute is required to identify %2 objects.
	
	Error Code: 0xC00000DC
	Error Translation: BERR_MISQUOTED_IMPORT_LINE
	Problem: An incorrect use of the quotation mark delimiter was encountered on the
	import line.
	
	Error Code: 0xC00000DD
	Error Translation: BERR_ILLEGAL_MODE
	Problem: %1 is not recognized as a legal import mode.
	
	Error Code: 0xC00000DE
	Error Translation: BERR_MODE_COLUMN
	Problem: %1 can be specified only in the second column.
	
	Error Code: 0xC00000DF
	Error Translation: BERR_OUT_OF_MEMORY
	Problem: Out of memory error encountered.
	
	Error Code: 0xC00000E0
	Error Translation: BERR_FILE_READ_FAILURE
	Problem: The following error occurred while attempting to read from the import
	file: %1
	
	Error Code: 0xC00000E1
	Error Translation: BERR_MISSING_COMMON_NAME_HEADER
	Problem: The import file %1 is not valid because the Common Name column is
	missing.
	#define BERR_MISSING_COMMON_NAME_HEADER 0xC00000E1L
	
	Error Code: 0xC00000E2
	Error Translation: BERR_MISSING_OBJ_CLASS_HEADER
	Problem: The import file %1 is not valid. The first column header must be
	Obj-Class. The first column header found was %2. Confirm that the column
	delimiter, '%3', is correct for the file.
	
	Error Code: 0xC00000E3
	Error Translation: BERR_HEADER_MISQUOTED
	Problem: Import file %1 is not valid because quotation mark delimiters were used
	improperly in the header line.
	
	Error Code: 0xC00000E4
	Error Translation:BERR_INVALID_OBJ_CLASS
	Problem: %1 is not recognized as a legal Obj-Class value.
	
	Error Code: 0xC00000E5
	Error Translation: BERR_PROXY_INIT_ERROR
	Problem: The following error was reported while trying to initialize the e-mail
	address generating subsystem. %1
	
	Error Code: 0xC00000E6
	Error Translation: BERR_NO_PROXY_SEPARATOR
	Problem: Import object %1 was not processed because the e-mail address type
	separator,, was not found in the specified %3 value: %2.
	
	Error Code: 0xC00000E7
	Error Translation:BERR_NO_PROXY_PREFIX
	Problem: Import object %1 was not processed because no e-mail address type was
	specified for %3 string: %2
	
	Error Code: 0xC00000E8
	Error Translation:BERR_ILLEGAL_PROXY_PREFIX_LEN
	Problem: Unable to process import object %1. The e-mail address type must be
	eight characters or less. %2
	
	Error Code: 0xC00000E9
	Error Translation:BERR_DUPLICATE_PROXY
	Problem: Unable to process object %1 because the specified e-mail address %2 has
	the same type as one or more other e-mail addresses specified for the same
	object.
	#define BERR_DUPLICATE_PROXY 0xC00000E9L
	
	Error Code: 0xC00000EA
	Error Translation:BERR_PROXY_GENERAL_FAILURE
	Problem: Unable to process object %1 because the Microsoft Exchange System
	Attendant encountered errors while attempting to generate or validate e-mail
	addresses. For more information, see the event log on server %2.
	
	Error Code: 0xC00000EB
	Error Translation: BERR_PROXY_TARGET_INVALID
	Problem: Unable to process custom recipient %1 because the target address is not
	valid. %2
	
	Error Code: 0xC00000EC
	Error Translation: BERR_PROXY_TARGET_NOT_UNIQUE
	Problem: Unable to process custom recipient %1 because target address %2 has
	already been assigned to Address Book entry %3.
	
	Error Code: 0xC00000ED
	Error Translation: BERR_PROXY_INVALID
	Problem: The e-mail address specified for import object %1 is not valid. %2
	
	Error Code: 0xC00000EE
	Error Translation: BERR_PROXY_NOT_UNIQUE
	Problem: The e-mail address specified for import object %1 is not unique. %2 has
	already been assigned to Address Book entry %3.
	
	Error Code: 0xC00000EF
	Error Translation: BERR_PROXY_GENERIC
	Problem: The Microsoft Exchange System Attendant reported %3 when attempting to
	generate or validate e-mail addresses for %1. For more information, see the
	event log on server %2 for details.
	
	Error Code: 0xC00000F0
	Error Translation: BERR_PROXY_SYSTEM
	Problem: The following error was encountered when attempting to generate or
	validate e-mail addresses for %1. %2
	
	Error Code: 0xC00000F1
	Error Translation: BERR_CREATE_DEL_ERROR
	Problem: Object %1 was not built because the string ~DEL may only be used with
	existing objects.
	
	Error Code: 0xC00000F2
	Error Translation: BERR_OM_ERROR
	Problem: Object management (OM) error %1 was reported.
	
	Error Code: 0xC00000F3
	Error Translation: BERR_ATTRIBUTE_OR_VALUE_EXISTS
	Problem: A duplicate value was specified for attribute %2 on object %1.
	
	Error Code: 0xC00000F4
	Error Translation: BERR_CONSTRAINT_VIOLATION
	Problem: Unable to complete the operation on object %1 because a value specified
	for attribute %2 is out of range.
	
	Error Code: 0xC00000F5
	Error Translation: BERR_INVALID_SYNTAX
	Problem: Unable to complete the operation on object %1 because the syntax
	specified for a value for attribute %2 is not valid.
	
	Error Code: 0xC00000F6
	Error Translation: BERR_NO_SUCH_ATTRIBUTE_OR_VALUE
	Problem: The attribute %2 is not defined on object %1 and could not be read.
	
	Error Code: 0xC00000F7
	Error Translation: BERR_ACCNT_LM_INIT_ERROR
	Problem: Unable to create Windows NT accounts because network error %1 occurred
	while initializing.
	
	Error Code: 0xC00000F8
	Error Translation: BERR_LM_INIT_ERROR
	Problem: Could not initialize -- Net error %1 reported during initialization.
	
	Error Code: 0xC00000F9
	Error Translation: BERR_LM_ERROR
	Problem: Network error %1 occurred.
	
	Error Code: 0xC00000FA
	Error Translation: BERR_ACCNT_PDC_GONE
	Problem: The primary domain controller for domain %1 is no longer available.
	
	Error Code: 0xC00000FB
	Error Translation: BERR_ACCNT_LM_ERROR
	Problem: Unable to create a Windows NT account for user %1. %2
	
	Error Code: 0xC00000FC
	Error Translation: BERR_ACCNT_WIN_ERROR
	Problem: Unable to create a Windows NT account for user %1. %2
	#define BERR_ACCNT_WIN_ERROR 0xC00000FCL
	
	Error Code: 0xC00000FD
	Error Translation: BERR_ACCNT_TOO_LONG
	Problem: Unable to create a Windows NT account %2 for mailbox %1 because Windows
	NT account names cannot exceed 20 characters.
	
	Error Code: 0xC00000FE
	Error Translation: BERR_ILLEGAL_ACCNT_CHARS
	Problem: Unable to create Windows NT account %2 for mailbox %1 because it
	contains the illegal character(s) %3.
	
	Error Code: 0xC00000FF
	Error Translation: BERR_LM_DELETE_ACCOUNT
	Problem: A network error occurred when attempting to delete Windows NT security
	account %1.
	
	Error Code: 0xC0000100
	Error Translation: BERR_WIN_DELETE_ACCOUNT
	Problem: Unable to delete the Windows NT account for user %1. %2.
	
	Error Code: 0xC0000101
	Error Translation: BERR_DEL_ACCOUNT_LOOKUP_FAILED
	Problem: An error occurred while attempting to lookup the Assoc-NT-Account value
	for object %1. Neither the security account nor the object was deleted.
	
	Error Code: 0xC0000102
	Error Translation: BERR_ACCOUNT_LOOKUP_FAILED
	Problem: An error occurred while attempting to lookup the Assoc-NT-Account value
	for object %1.
	
	Error Code: 0xC0000103
	Error Translation: BERR_ACCNT_WIN_INIT_ERROR
	Problem: Unable to create Windows NT accounts because Windows reports error %1.
	
	Error Code: 0xC0000104
	Error Translation: BERR_WIN_INIT_ERROR
	Problem: Unable to initialize because Windows reports error %1.
	
	Error Code: 0xC0000105
	Error Translation: BERR_REGISTER_ERROR
	Problem: Unable to initialize because Windows reports error %1 occurred while
	attempting to register with the system.
	
	Error Code: 0xC0000106
	Error Translation: BERR_WIN_ERROR
	Problem: Windows reports error %1.
	
	Error Code: 0xC0000107
	Error Translation: BERR_NO_ATTRIBUTES_SPECIFIED
	Problem: No attributes are specified.
	
	Error Code: 0xC0000108
	Error Translation: BERR_ATTRIBUTE_UNKNOWN
	Problem: The attribute %1 is unknown.
	
	Error Code: 0xC0000109
	Error Translation: BERR_ATTRIBUTE_NOT_IMPORTABLE
	Problem: Attribute %1 cannot be imported.
	
	Error Code: 0xC000010A
	Error Translation: BERR_CANT_DELETE_REQUIRED_ATTRIBUTE
	Problem: Unable to process object %1. The required attribute %2 may not be
	deleted.
	
	Error Code: 0xC000010B
	Error Translation: BERR_CANT_DELETE_ATTRIBUTE
	Problem: Unable to process object %1. Attribute %2 may not be deleted.
	
	Error Code: 0xC000010C
	Error Translation: BERR_DELETE_KEY_MUST_BE_SINGLE
	Problem: Unable to process object %1. ~DEL may not be specified with other values
	for multi-valued attribute %2.
	#define BERR_DELETE_KEY_MUST_BE_SINGLE 0xC000010CL
	
	Error Code: 0xC000010D
	Error Translation: BERR_COULD_NOT_EMPTY_MAILBOX
	Problem: Error %2 occurred while attempting to throw away %1's mail.
	#define BERR_COULD_NOT_EMPTY_MAILBOX 0xC000010DL
	
	Error Code: 0xC000010E
	Error Translation: BERR_MALFORMED_OCTET_STRING
	Problem: Unable to process object %1 because the octet string specified for
	attribute %2 is incorrect.
	
	Error Code: 0xC000010F
	Error Translation: BERR_ILLEGAL_CHAR_IN_NUMBER
	Problem: Unable to process object %1 because the character specified in value for
	attribute %2 is not valid.
	
	Error Code: 0xC0000110
	Error Translation: BERR_ILLEGAL_CHAR_IN_HEX_NUMBER
	Problem: Unable to process object %1 because the character specified in value for
	attribute %2 is not valid.
	
	Error Code: 0xC0000111
	Error Translation: BERR_CANNOT_BUILD_DN
	Problem: Could not build DN string from components: BasePoint == %1, Container ==
	%2, ObjName == %3.
	#define BERR_CANNOT_BUILD_DN 0xC0000111L
	
	Error Code: 0xC0000112
	Error Translation: BERR_MALFORMED_DN_STRING
	Problem: Unable to process object %1 because DN string %2 is not valid.
	
	Error Code: 0xC0000113
	Error Translation: BERR_UNKNOWN_RDN
	Problem: Unable to process object %1 because RDN string %2 is not valid.
	
	Error Code: 0xC0000114
	Error Translation: BERR_BADLY_SPECIFIED_DN
	Problem: DN string %1 is not valid.
	
	Error Code: 0xC0000115
	Error Translation: BERR_MALFORMED_DN_OBJECT
	Problem: The distinguished name (DN) object read from the directory information
	tree (DIT) is not valid.
	
	Error Code: 0xC0000116
	Error Translation: BERR_ACCNT_PDC_DISAPPEARED
	Problem: Unable to create a Windows NT account for user %1. The primary domain
	controller for domain %2 is not responding.
	
	Error Code: 0xC0000117
	Error Translation: BERR_XOM_REVOKE_MEMBERSHIP
	Problem: Object management (OM) error %1 was encountered when attempting to
	remove object %2 from a distribution list.
	
	Error Code: 0xC0000118
	Error Translation: BERR_XDS_ERROR
	Problem: The directory service reported the following error: %1
	
	Error Code: 0xC0000119
	Error Translation: BERR_XDS_CREATE
	Problem: Could not create object %2 because the directory service reported the
	following error: %1
	
	Error Code: 0xC000011A
	Error Translation: BERR_XDS_MODIFY
	Problem: Could not modify object %2 because the directory service reported the
	following error: %1
	
	Error Code: 0xC000011B
	Error Translation: BERR_XDS_REMOVE
	Problem: Could not remove object %2 because the directory service reported the
	following error: %1
	
	Error Code: 0xC000011C
	Error Translation: BERR_XDS_DL_MEMBERSHIP
	Problem: Could not modify the DL membership of object %2 because the directory
	service reported the following error: %1
	
	Error Code: 0xC000011D
	Error Translation: BERR_OBJECT_MEMBERSHIP_ERROR
	Problem: Unable to add object %1 to distribution list %2.
	
	Error Code: 0xC000011E
	Error Translation: BERR_CREATE_PATH_NOT_FOUND
	Problem: Unable to create object %1 because one or more objects in the directory
	path %2 do not exist.
	
	Error Code: 0xC000011F
	Error Translation: BERR_CREATE_TARGET_EXISTS
	Problem: Unable to create object %1 because it already exists.
	
	Error Code: 0xC0000120
	Error Translation: BERR_MOD_TARGET_NOT_FOUND
	Problem: Unable to modify object %1 because it could not be found.
	
	Error Code: 0xC0000121
	Error Translation: BERR_MOD_CLASS_MISMATCH
	Problem: Entry %1 could not be modified as a %2 because it already exists as a %3
	object.
	
	Error Code: 0xC0000122
	Error Translation: BERR_DEL_CLASS_MISMATCH
	Problem: Unable to delete the %3 %1 because the entry already exists as a %2 in
	the directory.
	
	Error Code: 0xC0000123
	Error Translation: BERR_INCORRECT_FIELD_COUNT
	Problem: Unable to process object %1 because the import line must contain the
	same number of fields as the header line. %2 were expected. %3 were found.
	
	Error Code: 0xC0000124
	Error Translation: BERR_MISSING_REQUIRED_ATTRIBUTE
	Problem: Unable to create %3 %1 because the required %2 attribute was not
	specified.
	
	Error Code: 0xC0000125
	Error Translation: BERR_ONLY_SINGLE_CONTAINER
	Problem: Only a single container can be specified for the import object %1.
	
	Error Code: 0xC0000126
	Error Translation: BERR_CANNOT_LOG_ERROR
	Problem: The directory import encountered Windows Error %2!lu! when attempting to
	record the following message in the system event log: %1
	
	Error Code: 0xC0000127
	Error Translation: BERR_INCLUDE_FAIL
	Problem: Unable to open or read the attribute value include file %1.
	
	Error Code: 0xC0000128
	Error Translation: BERR_BAD_FILE_PTR
	Problem: The attribute value file pointer %1 was not specified correctly.
	
	Error Code: 0xC0000129
	Error Translation: BERR_HOME_SERVER_UNKNOWN
	Problem: Unable to process object %1 because the specified home server %2 does
	not exist.
	
	Error Code: 0xC000012A
	Error Translation: BERR_HOME_SERVER_NO_MTA
	Problem: Unable to process object %1 because there is no Microsoft Exchange MTA
	installed on the specified home server %2.
	
	Error Code: 0xC000012B
	Error Translation: BERR_HOME_SERVER_NO_PRIVATE_STORE
	Problem: Unable to process object %1 because there is no Microsoft Exchange
	private information store installed on the specified home server %2.
	
	Error Code: 0xC000012C
	Error Translation: BEXPORT_WRITE_ERROR
	Problem: The directory export was stopped because the following error occurred
	when attempting to write an object description to the file: %n%1
	
	Error Code: 0xC000012D
	Error Translation: BEXPORT_UNKNOWN_CLASS
	Problem: The class %1 is not known and could not be exported.
	
	Error Code: 0x8000012E
	Error Translation: BEXPORT_NOSEARCHINFO_WARN
	Problem: No entries were found for the specified object class %1.
	
	For additional information about DAPI error codes and part two of two, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q261288 XGEN: DAPI Error Codes for Exchange Server 5.5 (Part 2 of 2)
	
	Additional Directory Access information can be found on the following Microsoft
	Web site:
	
	  Directory Access Functions on MSDN
	  (http://msdn.microsoft.com/library/psdk/exchserv/directry_4lbn.htm)
	
	
	Additional query words: ADSI LDAP InterOrg MMS BORK
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbEDKsearch kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMMSSearch kbEDK400 kbEDK500 kbEDK550 kbMMS210
	Version           : :2.1,4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

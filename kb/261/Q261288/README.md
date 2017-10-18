---
layout: page
title: "Q261288: XGEN: DAPI Error Codes for Exchange Server 5.5 (Part 2 of 2)"
permalink: kb/261/Q261288/
---

## Q261288: XGEN: DAPI Error Codes for Exchange Server 5.5 (Part 2 of 2)

	Article: Q261288
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5; winnt:5.5; :2.1
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Metadirectory Services, version 2.1 
	- Exchange Development Kit (EDK), versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This is part two of a two-part article containing a list of Microsoft Directory
	Application Program Interface (DAPI) error codes. This article is designed to
	help engineers find DAPI error messages that can occur when trying to
	synchronize Exchange Server 5.x directories with DAPI-aware applications such as
	Microsoft Metadirectory Services MAPI Management Agent for Microsoft Exchange
	Server, Linkage Directory Exchange (LDE), or the InterOrg Synchronization tool
	available in the Microsoft BackOffice Resource Kit, Second Edition.
	
	MORE INFORMATION
	================
	
	Error Code: 0xC000012F
	Error Translation: NTEXPORT_DC_NOT_FOUND
	Problem: The domain controller could not be found for domain %1.
	
	Error Code: 0xC0000130
	Error Translation: NTEXPORT_USER_ENUM_ERROR
	Problem: The following error occurred when attempting to read Windows NT user
	accounts from server %1. %2
	
	Error Code: 0xC0000131
	Error Translation: NTEXPORT_SERVER_NOT_FOUND
	Problem: NTExport could not find specified server, %1.
	
	Error Code: 0xC0000132
	Error Translation: NETEXPORT_WRITE_ERROR
	Problem: The user extraction was halted because the following error occurred when
	attempting to write a user account description to the file:%n %1
	
	Error Code: 0xC0000133
	Error Translation: NWEXPORT_NWDLL_LOAD_FAILED
	Problem: Unable to load the Netware DLL %1.
	
	Error Code: 0xC0000134
	Error Translation: NWEXPORT_LOGIN_FAILED
	Problem: NWExport could not log user %2 onto the file server %1.
	
	Error Code: 0xC0000135
	Error Translation: NWEXPORT_ATTACH_FAILED
	Problem: NWExport encountered an error attaching to the file server %1.
	#define NWEXPORT_ATTACH_FAILED 0xC0000135L
	
	Error Code: 0xC0000136
	Error Translation: NWEXPORT_LOGOUT_FAILED
	Problem: NWExport encountered an error logging out from the file server.
	
	Error Code: 0xC0000137
	Error Translation: NWEXPORT_DETACHED_FAILED
	Problem: NWExport encountered an error detaching from the file server.
	
	Error Code: 0xC0000138
	Error Translation: NWEXPORT_NO_USER
	Problem: NetWare user extract could not continue because no user was specified
	for log on to the file server.
	
	Error Code: 0xC0001000
	MessageIDs added with Exchange 4.0a
	Error Translation: DAPI_E_ANR_MULTIPLE_MATCH
	Problem: More than one object was found matching the specified search name %1.
	
	Error Code: 0xC0001001
	Error Translation: DAPI_E_ANR_NO_MATCH
	Problem: No objects were found matching the specified search name %1.
	
	Error Code: 0xC0001002
	Error Translation: DAPI_E_MULTIPLE_MATCH_ON_ATT
	Problem: More than one object was found matching the alias %3 specified for the
	%4 attribute on %2 %1.
	
	Error Code: 0xC0001003
	Error Translation: DAPI_E_NO_MATCH_ON_ATT
	Problem: No objects were found matching the alias %3 specified for the %4
	attribute on %2 %1.
	
	Error Code: 0x0000F001
	Error Translation: IDS_TAB
	Problem: <tab>%0
	
	Error Code: 0x0000F002
	Error Translation: IDS_CHARACTERS
	Problem: characters%0
	
	Error Code: 0x0000F003
	Error Translation: IDS_OCTETS
	Problem: octets%0
	
	Error Code: 0x4000F080
	Error Translation: PROXY_SUBST_GENERAL_FAILURE
	Problem: GENERAL_FAILURE%0
	
	Error Code: 0x4000F081
	Error Translation: PROXY_SUBST_FAILURES
	Problem: SOME_PROXIES_FAILED%0
	
	Error Code: 0x4000F082
	Error Translation: PROXY_SUBST_TARGET_INVALID
	Problem: TARGET_ADDRESS_NOT_VALID%0
	
	Error Code: 0x4000F083
	Error Translation: PROXY_SUBST_TARGET_NOT_UNIQUE
	Problem: TARGET_ADDRESS_NOT_UNIQUE%0
	
	Error Code: 0x4000F084
	Error Translation: PROXY_SUBST_DLL_NOT_IMPLEMENTED
	Problem: DLL_NOT_IMPLEMENTED%0
	
	Error Code: 0x4000F085
	Error Translation: PROXY_SUBST_OOM
	Problem: OUT_OF_MEMORY%0
	
	Error Code: 0x4000F086
	Error Translation: PROXY_SUBST_DLL_ERROR
	Problem: GENERAL_FAILURE%0
	
	Error Code: 0x4000F087
	Error Translation: PROXY_SUBST_DLL_PROTOCOL
	Problem: PROTOCOL_ERROR%0
	
	Error Code: 0x4000F088
	Error Translation: PROXY_SUBST_SYNTAX
	Problem: SYNTAX_ERROR%0
	
	Error Code: 0x4000F089
	Error Translation: PROXY_SUBST_EOF
	Problem: END_OF_FILE%0
	
	Error Code: 0x4000F08A
	Error Translation: PROXY_SUBST_SOFTWARE
	Problem: SOFTWARE_ERROR%0
	
	Error Code: 0x4000F08B
	Error Translation: PROXY_SUBST_CONFIGURATION
	Problem: CONFIGURATION_ERROR%0
	
	Error Code: 0x4000F08C
	Error Translation: PROXY_SUBST_CONTENTION
	Problem: CONTENTION_ERROR%0
	
	Error Code: 0x4000F08D
	Error Translation: PROXY_SUBST_NOT_FOUND
	Problem: DLL_NOT_FOUND%0
	
	Error Code: 0x4000F08E
	Error Translation: PROXY_SUBST_
	Problem: OUT_OF_DISK_SPACE%0
	
	Error Code: 0x4000F08F
	Error Translation: PROXY_SUBST_EXCEPTION
	Problem: EXCEPTION_ENCOUNTERED%0
	
	Error Code: 0x4000F090
	Error Translation: PROXY_SUBST_DEFAULT
	Problem: GENERAL_FAILURE%0
	#define PROXY_SUBST_DEFAULT 0x4000F090L
	
	Error Code: 0x4000F091
	Error Translation: PROXY_SUBST_INVALID
	Problem: PROXY_NOT_VALID%0
	
	Error Code: 0x4000F092
	Error Translation: PROXY_SUBST_NOT_UNIQUE
	Problem: PROXY_NOT_UNIQUE%0
	
	Error Code: 0x4000F093
	Error Translation: PROXY_SUBST_DUPLICATE
	Problem: DUPLICATE_PROXY_SPECIFIED%0
	
	Error Code: 0x4000F101
	Error Translation: ENCODING_INVALID
	Problem: ENCODING_INVALID%0
	
	Error Code: 0x4000F102
	Error Translation: FUNCTION_DECLINED
	Problem: FUNCTION_DECLINED%0
	
	Error Code: 0x4000F103
	Error Translation: FUNCTION_INTERRUPTED
	Problem: FUNCTION_INTERRUPTED%0
	
	Error Code: 0x4000F104
	Error Translation: MEMORY_INSUFFICIENT
	Problem: MEMORY_INSUFFICIENT%0
	
	Error Code: 0x4000F105
	Error Translation: NETWORK_ERROR
	Problem: NETWORK_ERROR%0
	
	Error Code: 0x4000F106
	Error Translation: NO_SUCH_CLASS
	Problem: NO_SUCH_CLASS%0
	
	Error Code: 0x4000F107
	Error Translation: NO_SUCH_EXCLUSION
	Problem: NO_SUCH_EXCLUSION%0
	
	Error Code: 0x4000F108
	Error Translation: NO_SUCH_MODIFICATION
	Problem: NO_SUCH_MODIFICATION%0
	
	Error Code: 0x4000F109
	Error Translation: NO_SUCH_RULES
	Problem: NO_SUCH_RULES%0
	
	Error Code: 0x4000F10A
	Error Translation: NO_SUCH_SYNTAX
	Problem: NO_SUCH_SYNTAX%0
	
	Error Code: 0x4000F10B
	Error Translation: NO_SUCH_TYPE
	Problem: NO_SUCH_TYPE%0
	
	Error Code: 0x4000F10C
	Error Translation: NO_SUCH_WORKSPACE
	Problem: NO_SUCH_WORKSPACE%0
	
	Error Code: 0x4000F10D
	Error Translation: NOT_AN_ENCODING
	Problem: NOT_AN_ENCODING%0
	
	Error Code: 0x4000F10E
	Error Translation: NOT_CONCRETE
	Problem: NOT_CONCRETE%0
	
	Error Code: 0x4000F10F
	Error Translation: NOT_PRESENT
	Problem: NOT_PRESENT%0
	
	Error Code: 0x4000F110
	Error Translation: NOT_PRIVATE
	Problem: NOT_PRIVATE%0
	
	Error Code: 0x4000F111
	Error Translation: NOT_THE_SERVICES
	Problem: NOT_THE_SERVICES%0
	
	Error Code: 0x4000F112
	Error Translation: PERMANENT_ERROR
	Problem: PERMANENT_ERROR%0
	
	Error Code: 0x4000F113
	Error Translation: POINTER_INVALID
	Problem: POINTER_INVALID%0
	
	Error Code: 0x4000F114
	Error Translation: SYSTEM_ERROR
	Problem: SYSTEM_ERROR%0
	
	Error Code: 0x4000F115
	Error Translation: TEMPORARY_ERROR
	Problem: TEMPORARY_ERROR%0
	
	Error Code: 0x4000F116
	Error Translation: TOO_MANY_VALUES
	Problem: TOO_MANY_VALUES%0
	
	Error Code: 0x4000F117
	Error Translation: VALUES_NOT_ADJACENT
	Problem: VALUES_NOT_ADJACENT%0
	
	Error Code: 0x4000F118
	Error Translation: WRONG_VALUE_LENGTH
	Problem: WRONG_VALUE_LENGTH%0
	#define WRONG_VALUE_LENGTH 0x4000F118L
	
	Error Code: 0x4000F119
	Error Translation: WRONG_VALUE_MAKEUP
	Problem: WRONG_VALUE_MAKEUP%0
	#define WRONG_VALUE_MAKEUP 0x4000F119L
	
	Error Code: 0x4000F11A
	Error Translation: WRONG_VALUE_NUMBER
	Problem: WRONG_VALUE_NUMBER%0
	
	Error Code: 0x4000F11B
	Error Translation: WRONG_VALUE_POSITION
	Problem: WRONG_VALUE_POSITION%0
	
	Error Code: 0x4000F11C
	Error Translation: WRONG_VALUE_SYNTAX
	Problem: WRONG_VALUE_SYNTAX%0
	
	Error Code: 0x4000F11D
	Error Translation: WRONG_VALUE_TYPE
	Problem: WRONG_VALUE_TYPE%0
	
	Error Code: 0x4000F11E
	Error Translation: BEYOND_LAST_OM_ERROR
	Problem: one beyond the last XOM problem%0
	
	Error Code: 0x4000F200
	Error Translation: XDS_PROBLEMS
	Problem: DS_SUCCESS%0
	
	Error Code: 0x4000F201
	Error Translation: DS_PROBLEM_ADMIN_LIMIT_EXCEEDED
	Problem: The maximum number of administrative connections to the server has been
	exceeded. Try again later or connect to a different server.
	
	Error Code: 0x4000F202
	Error Translation: DS_PROBLEM_AFFECTS_MULTIPLE_DSAS
	Problem: This change affects more than one directory.
	
	Error Code: 0x4000F203
	Error Translation: DS_PROBLEM_ALIAS_DEREFERENCING_PROBLEM
	Problem: The object referenced by this alias is not available.
	
	Error Code: 0x4000F204
	Error Translation: DS_PROBLEM_ALIAS_PROBLEM
	Problem: There is a problem with the object referenced by this alias.
	
	Error Code: 0x4000F205
	Error Translation: DS_PROBLEM_ATTRIBUTE_OR_VALUE_EXISTS
	Problem: An internal processing error has occurred: the attribute or value
	exists. Try restarting the application or the Microsoft Exchange Server
	computer, or both.
	
	Error Code: 0x4000F206
	Error Translation: DS_PROBLEM_BAD_ARGUMENT
	Problem: An internal processing error has occurred: invalid argument. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F207
	Error Translation: DS_PROBLEM_BAD_CLASS
	Problem: An internal processing error has occurred: invalid object class. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F208
	Error Translation: DS_PROBLEM_BAD_CONTEXT
	Problem: An internal processing error has occurred: invalid context. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F209
	Error Translation: DS_PROBLEM_BAD_NAME
	Problem: An internal processing error has occurred: invalid name. Try restarting
	the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F20A
	Error Translation: DS_PROBLEM_BAD_SESSION
	Problem: An internal processing error has occurred: invalid session. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F20B
	Error Translation: DS_PROBLEM_BAD_WORKSPACE
	Problem: An internal processing error has occurred: invalid workspace. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	#define DS_PROBLEM_BAD_WORKSPACE 0x4000F20BL
	
	Error Code: 0x4000F20C
	Error Translation: DS_PROBLEM_BUSY
	Problem: The directory is busy. Wait a few minutes and try again.
	
	Error Code: 0x4000F20D
	Error Translation: DS_PROBLEM_CANNOT_ABANDON
	Problem: An internal processing error has occurred: cannot abandon the operation.
	Try restarting the application or the Microsoft Exchange Server computer, or
	both.
	
	Error Code: 0x4000F20E
	Error Translation: DS_PROBLEM_CHAINING_REQUIRED
	Problem: You must make a connection to the Microsoft Exchange Server computer.
	
	Error Code: 0x4000F20F
	Error Translation: DS_PROBLEM_COMMUNICATIONS_PROBLEM
	Problem: The Microsoft Exchange Server computer does not respond.
	
	Error Code: 0x4000F210
	Error Translation: DS_PROBLEM_CONSTRAINT_VIOLATION
	Problem: The value specified for an attribute is either too big, too small, or
	not valid.
	
	Error Code: 0x4000F211
	Error Translation: DS_PROBLEM_DIT_ERROR
	Problem: An internal processing error has occurred: directory information tree
	error. Try restarting the application or the Microsoft Exchange Server computer,
	or both.
	
	Error Code: 0x4000F212
	Error Translation: DS_PROBLEM_ENTRY_EXISTS
	Problem: This entry already exists. You can modify the existing entry.
	
	Error Code: 0x4000F213
	Error Translation: DS_PROBLEM_INAPPROP_AUTHENTICATION
	Problem: An internal processing error has occurred: inappropriate authentication.
	Try restarting the application or the Microsoft Exchange Server computer, or
	both.
	
	Error Code: 0x4000F214
	Error Translation: DS_PROBLEM_INAPPROP_MATCHING
	Problem: An internal processing error has occurred: inappropriate matching. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F215
	Error Translation: DS_PROBLEM_INSUFFICIENT_ACCESS_RIGHTS
	Problem: You do not have the permissions required to complete the operation.
	
	Error Code: 0x4000F216
	Error Translation: DS_PROBLEM_INVALID_ATTRIBUTE_SYNTAX
	Problem: An internal processing error has occurred: invalid attribute syntax. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F217
	Error Translation: DS_PROBLEM_INVALID_ATTRIBUTE_VALUE
	Problem: An internal processing error has occurred: invalid attribute value. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F218
	Error Translation: DS_PROBLEM_INVALID_CREDENTIALS
	Problem: An internal processing error has occurred: invalid credentials. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F219
	Error Translation: DS_PROBLEM_INVALID_REF
	Problem: An internal processing error has occurred: invalid reference. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F21A
	Error Translation: DS_PROBLEM_INVALID_SIGNATURE
	Problem: An internal processing error has occurred: invalid object signature. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F21B
	Error Translation: DS_PROBLEM_LOOP_DETECTED
	Problem: An internal processing error has occurred: loop detected. Try restarting
	the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F21C
	Error Translation: DS_PROBLEM_MISCELLANEOUS
	Problem: An internal processing error has occurred: unknown directory error. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F21D
	Error Translation: DS_PROBLEM_MISSING_TYPE
	Problem: An internal processing error has occurred: missing type. Try restarting
	the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F21E
	Error Translation: DS_PROBLEM_MIXED_SYNCHRONOUS
	Problem: The directory is currently performing a replication operation which
	prevents completion of this operation. Wait a few minutes and then try again.
	
	Error Code: 0x4000F21F
	Error Translation: DS_PROBLEM_NAMING_VIOLATION
	Problem: An internal processing error has occurred: naming violation. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F220
	Error Translation: DS_PROBLEM_NO_INFORMATION
	Problem: An internal processing error has occurred: required information is not
	available. Try restarting the application or the Microsoft Exchange Server
	computer, or both.
	
	Error Code: 0x4000F221
	Error Translation: DS_PROBLEM_NO_SUCH_ATTRIBUTE_OR_VALUE
	Problem: The attribute does not exist.
	
	Error Code: 0x4000F222
	Error Translation: DS_PROBLEM_NO_SUCH_OBJECT
	Problem: The object does not exist.
	
	Error Code: 0x4000F223
	Error Translation: DS_PROBLEM_NO_SUCH_OPERATION
	Problem: An internal processing error has occurred: invalid operation. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F224
	Error Translation: DS_PROBLEM_NOT_ALLOWED_ON_NON_LEAF
	Problem: The operation is not valid on a non-leaf node.
	
	Error Code: 0x4000F225
	Error Translation: DS_PROBLEM_NOT_ALLOWED_ON_RDN
	Problem: The operation is not allowed on a relative distinguished name.
	
	Error Code: 0x4000F226
	Error Translation: DS_PROBLEM_NOT_SUPPORTED
	Problem: An internal processing error has occurred: operation is not supported.
	Try restarting the application or the Microsoft Exchange Server computer, or
	both.
	
	Error Code: 0x4000F227
	Error Translation: DS_PROBLEM_OBJECT_CLASS_MOD_PROHIB
	Problem: An internal processing error has occurred: object classes cannot be
	modified. Try restarting the application or the Microsoft Exchange Server
	computer, or both.
	
	Error Code: 0x4000F228
	Error Translation: DS_PROBLEM_OBJECT_CLASS_VIOLATION
	Problem: An internal processing error has occurred: object class violation. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F229
	Error Translation: DS_PROBLEM_OUT_OF_SCOPE
	Problem: An internal processing error has occurred: out of scope. Try restarting
	the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F22A
	Error Translation: DS_PROBLEM_PROTECTION_REQUIRED
	Problem: An internal processing error has occurred: protection required. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F22B
	Error Translation: DS_PROBLEM_TIME_LIMIT_EXCEEDED
	Problem: An internal processing error has occurred: time limit exceeded. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F22C
	Error Translation: DS_PROBLEM_TOO_LATE
	Problem: An internal processing error has occurred: time exceeded. Try restarting
	the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F22D
	Error Translation DS_PROBLEM_TOO_MANY_OPERATIONS
	Problem: The maximum number of operations has been reached.
	
	Error Code: 0x4000F22E
	Error Translation: DS_PROBLEM_TOO_MANY_SESSIONS
	Problem: The maximum number of sessions has been reached.
	
	Error Code: 0x4000F22F
	Error Translation: DS_PROBLEM_UNABLE_TO_PROCEED
	Problem: An internal processing error has occurred: directory unable to proceed.
	Try restarting the application or the Microsoft Exchange Server computer, or
	both.
	
	Error Code: 0x4000F230
	Error Translation: DS_PROBLEM_UNAVAILABLE
	Problem: An internal processing error has occurred: information not available.
	Try restarting the application or the Microsoft Exchange Server computer, or
	both.
	
	Error Code: 0x4000F231
	Error Translation: DS_PROBLEM_UNAVAILABLE_CRIT_EXT
	Problem: An internal processing error has occurred: unavailable Crit. Ext. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F232
	Error Translation: DS_PROBLEM_UNDEFINED_ATTRIBUTE_TYPE
	Problem: An internal processing error has occurred: undefined attribute type. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F233
	Error Translation: DS_PROBLEM_UNWILLING_TO_PERFORM
	Problem: An internal processing error has occurred: cannot perform operation. Try
	restarting the application or the Microsoft Exchange Server computer, or both.
	
	Error Code: 0x4000F234
	Error Translation: DS_PROBLEM_NOT_ON_CURRENT_SITE
	Problem: Changes cannot be written to this directory object. Try connecting to a
	Microsoft Exchange Server computer in the same site as this object.
	
	Error Code: 0x4000F235
	Error Translation: DS_FULL_DRIVE
	Problem: There is not enough space on the device.
	
	Error Code: 0x4000F236
	Error Translation: DS_OUT_OF_MEMORY
	Problem: The server does not have enough memory.
	
	Error Code: 0x4000F237
	Error Translation: DS_SYSTEM_ERROR
	Problem: An internal processing error has occurred: system error. Try restarting
	the application or the Microsoft Exchange Server computer, or both.
	
	For additional information about DAPI error codes and part one of two, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q261283 XGEN: DAPI Error Codes for Exchange Server 5.5 (Part 1 of 2)
	
	Additional Directory Access information can be found on the following Microsoft
	Web site:
	
	  Directory Access Functions on MSDN
	  (http://msdn.microsoft.com/library/psdk/exchserv/directry_4lbn.htm)
	
	
	Additional query words: ADSI LDAP InterOrg MMS BORK
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbEDKsearch kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMMSSearch kbEDK400 kbEDK500 kbEDK550 kbMMS210
	Version           : WINDOWS:4.0,5.0,5.5; winnt:5.5; :2.1
	Issue type        : kbinfo
	
	=============================================================================
	

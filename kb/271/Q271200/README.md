---
layout: page
title: "Q271200: XADM: Event ID 1171 Message Occurs with  Exception E0010006"
permalink: /kb/271/Q271200/
---

## Q271200: XADM: Event ID 1171 Message Occurs with  Exception E0010006

	Article: Q271200
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If maximum logging is enabled on the Directory Service Internal Processing
	category, the following event ID message may be logged in the Application event
	log:
	
	  Event ID: 1171
	  Source: MSExchangeDS
	  Description: Exception E0010006 has occurred with parameters <PARAMETER>
	  and 1 internal ID <xxxxx>. Contact Microsoft Technical Support for
	  assistance.
	
	In this case, the exception code does not necessarily indicate a problem with the
	Exchange Server computer.
	
	MORE INFORMATION
	================
	
	The E0010006 exception indicates that an operation was submitted using
	Lightweight Directory Access Protocol (LDAP) protocol. The first parameter (that
	is indicated by <PARAMETER> in the event ID 1171 message described in the
	preceding section) is the actual LDAP code.
	
	The following table lists the LDAP codes and their definitions.
	
	NOTE: The parameter number that is listed in the event ID 1171 message is in
	decimal format.
	
	  
	  +---------------------------------------------------------+
	  | Definition of function          | Hexadecimal | Decimal | 
	  +---------------------------------------------------------+
	  | LDAP_SUCCESS                    | 0x00        | 0       | 
	  +---------------------------------------------------------+
	  | LDAP_OPERATIONS_ERROR           | 0x01        | 1       | 
	  +---------------------------------------------------------+
	  | LDAP_PROTOCOL_ERROR             | 0x02        | 2       | 
	  +---------------------------------------------------------+
	  | LDAP_TIMELIMIT_EXCEEDED         | 0x03        | 3       | 
	  +---------------------------------------------------------+
	  | LDAP_SIZELIMIT_EXCEEDED         | 0x04        | 4       | 
	  +---------------------------------------------------------+
	  | LDAP_COMPARE_FALSE              | 0x05        | 5       | 
	  +---------------------------------------------------------+
	  | LDAP_COMPARE_TRUE               | 0x06        | 6       | 
	  +---------------------------------------------------------+
	  | LDAP_AUTH_METHOD_NOT_SUPPORTED  | 0x07        | 7       | 
	  +---------------------------------------------------------+
	  | LDAP_STRONG_AUTH_REQUIRED       | 0x08        | 8       | 
	  +---------------------------------------------------------+
	  | LDAP_REFERRAL_V2                | 0x09        | 9       | 
	  +---------------------------------------------------------+
	  |                                 |             |         | 
	  +---------------------------------------------------------+
	  | LDAP_PARTIAL_RESULTS            | 0x09        | 9       | 
	  +---------------------------------------------------------+
	  | LDAP_REFERRAL                   | 0x0a        | 10      | 
	  +---------------------------------------------------------+
	  | LDAP_ADMIN_LIMIT_EXCEEDED       | 0x0b        | 11      | 
	  +---------------------------------------------------------+
	  | LDAP_UNAVAILABLE_CRIT_EXTENSION | 0x0c        | 12      | 
	  +---------------------------------------------------------+
	  | LDAP_CONFIDENTIALITY_REQUIRED   | 0x0d        | 13      | 
	  +---------------------------------------------------------+
	  | LDAP_SASL_BIND_IN_PROGRESS      | 0x0e        | 14      | 
	  +---------------------------------------------------------+
	  | LDAP_NO_SUCH_ATTRIBUTE          | 0x10        | 16      | 
	  +---------------------------------------------------------+
	  | LDAP_UNDEFINED_TYPE             | 0x11        | 17      | 
	  +---------------------------------------------------------+
	  | LDAP_INAPPROPRIATE_MATCHING     | 0x12        | 18      | 
	  +---------------------------------------------------------+
	  | LDAP_CONSTRAINT_VIOLATION       | 0x13        | 19      | 
	  +---------------------------------------------------------+
	  |                                 |             |         | 
	  +---------------------------------------------------------+
	  | LDAP_ATTRIBUTE_OR_VALUE_EXISTS  | 0x14        | 20      | 
	  +---------------------------------------------------------+
	  | LDAP_INVALID_SYNTAX             | 0x15        | 21      | 
	  +---------------------------------------------------------+
	  | LDAP_NO_SUCH_OBJECT             | 0x20        | 32      | 
	  +---------------------------------------------------------+
	  | LDAP_ALIAS_PROBLEM              | 0x21        | 33      | 
	  +---------------------------------------------------------+
	  | LDAP_INVALID_DN_SYNTAX          | 0x22        | 34      | 
	  +---------------------------------------------------------+
	  | LDAP_IS_LEAF                    | 0x23        | 35      | 
	  +---------------------------------------------------------+
	  | LDAP_ALIAS_DEREF_PROBLEM        | 0x24        | 36      | 
	  +---------------------------------------------------------+
	  | LDAP_INAPPROPRIATE_AUTH         | 0x30        | 48      | 
	  +---------------------------------------------------------+
	  | LDAP_INVALID_CREDENTIALS        | 0x31        | 49      | 
	  +---------------------------------------------------------+
	  | LDAP_INSUFFICIENT_RIGHTS        | 0x32        | 50      | 
	  +---------------------------------------------------------+
	  | LDAP_BUSY                       | 0x33        | 51      | 
	  +---------------------------------------------------------+
	  |                                 |             |         | 
	  +---------------------------------------------------------+
	  | LDAP_UNAVAILABLE                | 0x34        | 52      | 
	  +---------------------------------------------------------+
	  | LDAP_UNWILLING_TO_PERFORM       | 0x35        | 53      | 
	  +---------------------------------------------------------+
	  | LDAP_LOOP_DETECT                | 0x36        | 54      | 
	  +---------------------------------------------------------+
	  | LDAP_NAMING_VIOLATION           | 0x40        | 64      | 
	  +---------------------------------------------------------+
	  | LDAP_OBJECT_CLASS_VIOLATION     | 0x41        | 65      | 
	  +---------------------------------------------------------+
	  | LDAP_NOT_ALLOWED_ON_NONLEAF     | 0x42        | 66      | 
	  +---------------------------------------------------------+
	  | LDAP_NOT_ALLOWED_ON_RDN         | 0x43        | 67      | 
	  +---------------------------------------------------------+
	  | LDAP_ALREADY_EXISTS             | 0x44        | 68      | 
	  +---------------------------------------------------------+
	  | LDAP_NO_OBJECT_CLASS_MODS       | 0x45        | 69      | 
	  +---------------------------------------------------------+
	  | LDAP_RESULTS_TOO_LARGE          | 0x46        | 70      | 
	  +---------------------------------------------------------+
	  |                                 |             |         | 
	  +---------------------------------------------------------+
	  | LDAP_AFFECTS_MULTIPLE_DSAS      | 0x47        | 71      | 
	  +---------------------------------------------------------+
	  | LDAP_OTHER                      | 0x50        | 80      | 
	  +---------------------------------------------------------+
	  | LDAP_SERVER_DOWN                | 0x51        | 81      | 
	  +---------------------------------------------------------+
	  | LDAP_LOCAL_ERROR                | 0x52        | 82      | 
	  +---------------------------------------------------------+
	  | LDAP_ENCODING_ERROR             | 0x53        | 83      | 
	  +---------------------------------------------------------+
	  | LDAP_DECODING_ERROR             | 0x54        | 84      | 
	  +---------------------------------------------------------+
	  | LDAP_TIMEOUT                    | 0x55        | 85      | 
	  +---------------------------------------------------------+
	  | LDAP_AUTH_UNKNOWN               | 0x56        | 86      | 
	  +---------------------------------------------------------+
	  | LDAP_FILTER_ERROR               | 0x57        | 87      | 
	  +---------------------------------------------------------+
	  | LDAP_USER_CANCELLED             | 0x58        | 88      | 
	  +---------------------------------------------------------+
	  | LDAP_PARAM_ERROR                | 0x59        | 89      | 
	  +---------------------------------------------------------+
	  |                                 |             |         | 
	  +---------------------------------------------------------+
	  | LDAP_NO_MEMORY                  | 0x5a        | 90      | 
	  +---------------------------------------------------------+
	  | LDAP_CONNECT_ERROR              | 0x5b        | 91      | 
	  +---------------------------------------------------------+
	  | LDAP_NOT_SUPPORTED              | 0x5c        | 92      | 
	  +---------------------------------------------------------+
	  | LDAP_NO_RESULTS_RETURNED        | 0x5e        | 93      | 
	  +---------------------------------------------------------+
	  | LDAP_CONTROL_NOT_FOUND          | 0x5d        | 94      | 
	  +---------------------------------------------------------+
	  | LDAP_MORE_RESULTS_TO_RETURN     | 0x5f        | 95      | 
	  +---------------------------------------------------------+
	  | LDAP_CLIENT_LOOP                | 0x60        | 96      | 
	  +---------------------------------------------------------+
	  | LDAP_REFERRAL_LIMIT_EXCEEDED    | 0x61        | 97      | 
	  +---------------------------------------------------------+
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
